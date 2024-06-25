import React, { useState } from "react";
import "./join.css";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const Join = () => {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [toogle, setToogle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_ahfm2ow",
        "template_ihagu77",
        templateParams,
        "X85pcqdzWUc7YZXRQ"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
          setToogle(true);
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send message, please try again later.");
        }
      );
  };

  return (
    <div className="message-container">
      <form onSubmit={handleSubmit} className="message-form">
        <h2> {t("Contact")} </h2>
        <div className="form-group">
          <label> {t("frist")} : </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>{t("last")} : </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>{t("email")} :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>{t("messagelabe")} :</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="message-button">
          Send
        </button>
        {toogle && <p style={{ color: "#2196f3" }}>The message Was Sent</p>}
      </form>
    </div>
  );
};

export default Join;
