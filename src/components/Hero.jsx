import { useEffect, useState } from "react";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import animation from "../../src/assets/mainSectionLootie.json";
const Hero = () => {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);
  const [form, setForm] = useState({
    email: "",
  });
  const emailRegex = /^[\w.%+-]+@(?:[\w-]+\.)+[a-zA-Z]{2,}$/;
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (form.email && emailRegex.test(form.email)) {
      emailjs
        .send(
          "service_kettg3o",
          "template_7ubzm9g",
          {
            from_name: form.name ? form.name : "Anonymous from Main section",
            to_name: "Umar Raza",
            from_email: form.email,
            to_email: "umaarrr0786@gmail.com",
            message: form.message ? form.message : "from Main Section",
          },
          "x6mv654NBe6ibAZaZ"
        )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
              email: "",
            });
          },
          (error) => {
            setLoading(false);
            console.error(error);
            alert("Ahh, something went wrong. Please try again.");
          }
        );
    } else {
      alert("Enter your email address ");
    }
    setLoading(false);
  };
  return (
    <section
      className={`relative w-full min-h-screen mx-auto md:pt-[150px] pt-[100px] `}
    >
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="md:flex flex-col justify-center items-center hidden mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="w-full max-w-[800px]">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Umar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A passionate React.js, Next.js, and JavaScript developer dedicated
            to creating exceptional web experiences. With a blend of technical
            expertise and creative flair, I bring ideas to life.
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Think of me as your friendly neighborhood developer, here to
            sprinkle some technical magic and creative flair into your project.
            Whether you're looking for a sleek and responsive website, a dynamic
            web application, or expert guidance on your next project, you're in
            the right place.
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Let's talk about your vision and how we can make it shine online!
          </p>
          <form className="mt-5 sm:flex w-full gap-2" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="jhon@example.com"
              value={form.email}
              onChange={handleChange}
              maxLength={250}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium
              w-full sm:mb-0 mb-2"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-small shadow-md shadow-primary sm:w-[200px] w-full"
            >
              Let's Meet
            </button>
          </form>
        </div>
      </div>
      {/* {isInView && <Lottie animationData={animation} loop={false} />} */}
      <div className="w-full max-w-[600px] m-auto">
        <Lottie animationData={animation} />
      </div>
    </section>
  );
};

export default Hero;
