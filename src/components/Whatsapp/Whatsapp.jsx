import React, { useState, useRef, useEffect } from "react";
import {
  StyledChat,
  WhatsAppBody,
  WhatsAppHead,
  WhatsAppMessage,
  WhatsappIcon,
  WhatsappWarapper,
} from "./Whatsapp.styles";
import { BsWhatsapp } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { VscSend } from "react-icons/vsc";
const Whatsapp = ({
  brandName = "Umar Raza",
  status = "Replies within 1 hour",
  messageText = "How can i help?",
  number = "+923174888627",
  BgImage = "https://res.cloudinary.com/dlysixl4e/image/upload/v1696925108/whatsappBg_ubnm7c.jpg",
  logo = "https://res.cloudinary.com/dlysixl4e/image/upload/v1711717516/icon_y0hi7r.gif",
}) => {
  const dropdownRef = useRef(null);
  const [handelWhatsApp, setHandelWhatsApp] = useState(false);
  const [whatsAppSnip, setwhatsAppSnip] = useState(false);

  const [message, setMessage] = useState("");
  const Url = `https://wa.me/${number}?text=${message}`;
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setHandelWhatsApp(false);
    }
  };
  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setwhatsAppSnip(true);
    }, 10000);
  }, []);
  function handelSubmit() {
    if (!message) return;
    window.open(Url, "_blank");
  }
  return (
    whatsAppSnip && (
      <WhatsappWarapper ref={dropdownRef}>
        {handelWhatsApp && (
          <StyledChat className={handelWhatsApp && "animation"} bg={BgImage}>
            <WhatsAppHead>
              <div className="dp">
                <div className="image">
                  <img src={logo} alt="logo" width={150} height={150} />
                </div>
              </div>
              <div className="text">
                <h1>{brandName}</h1>
                <p>{status}</p>
              </div>
              <div className="cross" onClick={() => setHandelWhatsApp(false)}>
                <RxCross2 size={22} color="#fff" />
              </div>
            </WhatsAppHead>
            <WhatsAppBody>
              <div className="loading">
                <h4>{brandName}</h4>
                <p>{messageText}</p>
              </div>
            </WhatsAppBody>
            <WhatsAppMessage>
              <input
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                maxLength={200}
              />
              <div className="icon">
                <VscSend color="#fff" size={30} onClick={handelSubmit} />
              </div>
            </WhatsAppMessage>
          </StyledChat>
        )}
        <WhatsappIcon>
          <div
            className="pulsating-circle"
            onClick={() => {
              setHandelWhatsApp(!handelWhatsApp);
            }}
          >
            <BsWhatsapp size="30" color="#fff" />
          </div>
        </WhatsappIcon>
      </WhatsappWarapper>
    )
  );
};

export default Whatsapp;
