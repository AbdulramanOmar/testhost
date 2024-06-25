// SendEmailForm.js
import React, { useState } from "react";
import { functions } from "../../firebase-config";

const SendEmailForm = () => {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmails = async () => {
    setLoading(true);
    setMessage("");
    const sendBulkEmails = functions.httpsCallable("sendBulkEmails");
    try {
      const result = await sendBulkEmails({ subject, body });
      if (result.data.success) {
        setMessage("Emails sent successfully!");
      } else {
        setMessage(`Failed to send emails: ${result.data.error}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-product">
      <h1>Send Email to Subscribers</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendEmails();
        }}
      >
        <div>
          <label>Subject:</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Emails"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default SendEmailForm;
