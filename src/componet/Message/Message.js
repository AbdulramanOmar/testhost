import { useTranslation } from "react-i18next";
import "./message.css";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

const Message = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [message, setMessage] = useState("");
  const collectionRef = collection(db, "subcribes");
  const handleSubmit = async (e) => {
    const url = `YOUR_MAILCHIMP_URL_HERE`;
    if (!agree) {
      setMessage("يرجى إدخال البريد الإلكتروني والموافقة على الشروط.");
      return;
    }
    e.preventDefault();
    try {
      await addDoc(collectionRef, { email: email });
      setEmail("");
      setMessage("");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email_address: email, status: "subscribed" }),
      });

      if (response.ok) {
        setMessage("تم الاشتراك بنجاح!");
      } else {
        setMessage("حدث خطأ أثناء الاشتراك. حاول مرة أخرى.");
      }
    } catch (error) {
      setMessage("حدث خطأ أثناء الاشتراك. حاول مرة أخرى.");
    }
  };
  return (
    <div className="message">
      <div className="container">
        <div className="message-content">
          <input
            type="email"
            placeholder={t("messageplace")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>{t("messagebut")}</button>
        </div>
        <div className="message-check">
          <input
            id="mess"
            type={"checkbox"}
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label htmlFor="mess"> {t("messagelabel")} </label>
          {message && <p style={{ color: "red" }}>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Message;
