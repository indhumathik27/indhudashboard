import React from "react";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>

      <form>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Phone Number</label>
        <input type="tel" placeholder="Enter your phone number" required />

        <label>Message</label>
        <textarea placeholder="Enter your message" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;