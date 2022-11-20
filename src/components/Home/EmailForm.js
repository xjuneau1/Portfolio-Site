import React, { useState } from "react";
import "./emailform.css";
function EmailForm() {
    const [emailData, setEmailData] = useState({})
    const handleChange = ({ target }) => {
        setEmailData({...emailData, [target.name]: target.value })
    }
    const handleSendEmail = (e) => {
        e.preventDefault()
    }
  return (
    <div className="email-form">
      <h3>Send me an Email!</h3>
      <form onSubmit={handleSendEmail}>
        <input 
            placeholder="Your Name"
            onChange={handleChange}
            ></input>
        <input 
            placeholder="Your Email"
            onChange={handleChange}
            ></input>
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default EmailForm;
