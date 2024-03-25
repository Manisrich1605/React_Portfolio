import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let correctedValue = value;
    if (name === "phoneNumber") {
      correctedValue = value.replace(/\D/g, "");
    } else {
      correctedValue = value.trim();
    }
    if (correctedValue === formData[name]) {
      return;
    }
    setFormData({
      ...formData,
      [name]: correctedValue,
    });
  };
  const handleSend = (e) => {
    e.preventDefault();
    const { name, phoneNumber, email, subject, message } = formData;
    if (!name || !phoneNumber || !email || !subject || !message) {
      setErrMsg("All fields are required!");
      return;
    }
    axios
      .post("http://localhost:5281/api/Reactportfolio", formData)
      .then(() => {
        toast.success(
          `Thank you dear ${name}, Your message has been sent successfully!`
        );
        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrMsg("");
      })
      .catch(() => {
        setErrMsg("Failed to send message. Please try again later.");
      });
  };
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <ToastContainer />
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    onChange={handleInputChange}
                    value={formData.name}
                    name="name"
                    className={`${
                      errMsg === "All fields are required!" &&
                      formData.name.trim() === "" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={handleInputChange}
                    value={formData.phoneNumber}
                    name="phoneNumber"
                    className={`${
                      errMsg === "All fields are required!" &&
                      formData.phoneNumber.trim() === "" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={handleInputChange}
                  value={formData.email}
                  name="email"
                  className={`${
                    errMsg === "All fields are required!" &&
                    formData.email.trim() === "" &&
                    "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={handleInputChange}
                  value={formData.subject}
                  name="subject"
                  className={`${
                    errMsg === "All fields are required!" &&
                    formData.subject.trim() === "" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={handleInputChange}
                  value={formData.message}
                  name="message"
                  className={`${
                    errMsg === "All fields are required!" &&
                    formData.message.trim() === "" &&
                    "outline-designColor"
                  } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
