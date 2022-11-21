import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./emailform.css";
function EmailForm() {
  const form = useRef();
  const handleSendEmail = async (e) => {
    e.preventDefault();
    try {
      if (window.confirm("Send this email?")) {
        const response = await emailjs.sendForm(
          "service_j0jxz7o",
          "template_87wqnfp",
          form.current,
          "HD1EUdCu4IxSaWwiA"
        );
        console.log("SUCCESS", response.status, response.text);
        e.target.reset();
      }
    } catch (error) {
      console.log("FAILED", error);
    }
  };
  return (
    <div className="email-form">
      <h2>Send me an Email:</h2>
      <form ref={form} onSubmit={handleSendEmail}>
        <input
          className="email-input"
          placeholder="Your Name"
          type="text"
          name="user_name"
        ></input>
        <input
          className="email-input"
          placeholder="Your Email Address"
          type="text"
          name="user_email"
        ></input>
        <textarea
          className="email-input"
          placeholder="Your Message"
          type="text"
          name="user_message"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default EmailForm;
