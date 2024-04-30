import React, { useState } from "react";
import Title from "./Title";

function Contact() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const mailtoLink = `mailto:tdanguyen19@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}`;
  return (
    <div className="mx-auto mb-10 flex flex-col">
      <div className="flex items-center justify-center">
        <form
          action="https://getform.io/f/(customSlugHere)"
          method="POST"
          className="flex w-full flex-col md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="my-2 rounded-md border-2 bg-transparent p-2 focus:outline-none"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="mb-4 rounded-md border-2 bg-transparent p-2 focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="button"
            className="inline-block w-max rounded-md bg-gradient-to-r from-yellow-500 to-pink-500 px-8 py-3 text-center text-base font-medium text-white drop-shadow-md hover:stroke-white"
          >
            <a href={mailtoLink}>Work With Me</a>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
