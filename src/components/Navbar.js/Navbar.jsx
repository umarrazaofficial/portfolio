import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { logo, menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [toggle]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex item-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Umar &nbsp;<span className="sm:block hidden"> | Portfolio</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
          <li
            className={`text-secondary
                 hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(link.title)}
          >
            <a href="https://github.com/umarrazaofficial" target="blank">
              GitHub
            </a>
          </li>
          <li
            className={`text-secondary
                 hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(link.title)}
          >
            <a
              href="https://www.linkedin.com/in/umar-raza-b99982246/"
              target="blank"
            >
              Linkedin
            </a>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end item-center ">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-primary fixed top-[76px] left-0 right-0 bottom-0 right-0  px-10  w-[100%] rounded-xl`}
          >
            <ul className="list-none flex justify-start items-start flex-col gap-4 ">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[18px] leading-[22px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
              <li
                className={`text-secondary
                 hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href="https://github.com/umarrazaofficial" target="blank">
                  GitHub
                </a>
              </li>
              <li
                className={`text-secondary
                 hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a
                  href="https://www.linkedin.com/in/umar-raza-b99982246/"
                  target="blank"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
