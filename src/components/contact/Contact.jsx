import { useSelector, useDispatch } from "react-redux";
import { closeWindow, focusWindow } from "../../common/store/state/windowSlice";
import { useState, useEffect } from "react";
import { socials } from "../../common/constants";

import { CiWifiOn } from "react-icons/ci";
import { FaBatteryHalf } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import dayjs from "dayjs";

const Contact = () => {
  const win = useSelector((state) => state.window.windows.contact);
  const dispatch = useDispatch();
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    dispatch(focusWindow("contact"));

    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;

    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  // 🔥 FIX: global listener
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  //send message
  const [form, setForm] = useState({
    name: "",
    email: "",
    nohp: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwNZAWJgSIWpil3C5WXVA44p5SDYAuF7DUecWdrw-hoCY8KEygTCzhGjBOVtzTDT6EnJg/exec";

    const formData = new FormData();

    formData.append("nama", form.name);
    formData.append("mail", form.email);
    formData.append("hp", form.nohp);
    formData.append("pesan", form.message);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      alert("Pesan Anda berhasil dikirim!");

      setForm({
        name: "",
        email: "",
        nohp: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  if (!win.isOpen) return null; // ⛔ penting!
  return (
    <div>
      {/* Pc or laptop */}
      <div
        style={{
          zIndex: win.zIndex,
          left: position.x + 25,
          top: position.y - 25,
          width: "34rem",
          height: "46rem",
        }}
        className="hidden md:flex md:flex-col absolute w-[520px] bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {/* HEADER */}
        <div
          onMouseDown={handleMouseDown}
          className="flex justify-between items-center p-2 bg-gray-200 cursor-move"
        >
          <div className="flex gap-2">
            {/* 🔴 CLOSE */}
            <button
              onClick={() => dispatch(closeWindow("contact"))}
              className="cursor-pointer"
            >
              🔴
            </button>
            {/* 🟡 MINIMIZE */}
            <button>🟡</button>

            {/* 🟢 FULLSCREEN */}
            <button>🟢</button>
          </div>
          <span className="transform -translate-x-50 font-bold text-xl text-gray-600">
            Contact Me
          </span>
        </div>

        {/* CONTENT */}
        <div
          onMouseDown={() => dispatch(focusWindow("contact"))}
          className="px-4 pt-4 pb-10 overflow-y-scroll scroll-smooth"
        >
          <div className="space-y-5 w-20 h-20 overflow-hidden rounded-full">
            <img src="/images/akbar.JPG" alt="Akbar" className="w-20" />
          </div>
          <h3 className="font-poppins mt-1">Let's Connect</h3>
          <p className="font-poppins"> @akbardermawan27.gmail.com</p>
          <p className="font-roboto">
            Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
          </p>

          <ul className="flex gap-5 mt-5 i">
            {socials.map(({ id, bg, link, icon, text }) => (
              <li
                key={id}
                style={{ backgroundColor: bg }}
                className="p-5 rounded-2xl"
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img src={icon} alt={text} className="size-5" />
                  <p className="font-poppins mt-1 font-semibold">{text}</p>
                </a>
              </li>
            ))}
          </ul>
          {/* send message */}
          <div className="px-5 mt-10 pb-3 border border-gray-500 rounded-2xl">
            <h2 className="text-3xl  font-bold text-gray-900 my-5 text-center font-poppins ">
              Send Me a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 px-2">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Input your name"
                  required
                  className="w-full  border border-slate-700 text-gray-600 placeholder-slate-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your email"
                  required
                  className="w-full  border border-slate-700 text-black placeholder-slate-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium  text-gray-600 mb-2">
                  No HP
                </label>

                <input
                  type="text"
                  name="nohp"
                  value={form.nohp}
                  onChange={handleChange}
                  placeholder="08xxxxxxxxxx"
                  required
                  className="w-full border border-slate-700 text-black placeholder-slate-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium  text-gray-600 mb-2">
                  Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="w-full  border border-slate-700 text-black placeholder-slate-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg hover:shadow-sky-500/30"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* hp or android */}
      {/* Android or hp */}
      <div
        style={{
          zIndex: win.zIndex,
        }}
        className=" absolute top-0 left-0 w-full h-screen bg-white  overflow-hidden flex flex-col md:hidden"
      >
        {/* HEADER */}
        <div className="w-full">
          <div className="flex p-5 justify-between items-center border border-t-white border-x-white border-b-gray-200">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => dispatch(closeWindow("contact"))}
            >
              <IoMdArrowBack className="w-5 h-5 mr-3" />
              <span className="font-georama text-blue-500">Go Back</span>
            </div>
            <div>
              <h3 className="text-xl text-gray-500 font-georama font-bold transform -translate-x-1/5">
                Contact
              </h3>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="px-4 pt-2 pb-10 overflow-x-hidden overflow-y-scroll">
          <div className="space-y-5 w-20 h-20 overflow-hidden rounded-full">
            <img src="/images/akbar.JPG" alt="Akbar" className="w-20" />
          </div>
          <h3 className="font-poppins mt-1">Let's Connect</h3>
          <p className="font-poppins"> @akbardermawan27.gmail.com</p>
          <p className="font-roboto">
            Got an idea? A bug to squash? Or just wanna talk tech? I'm in.
          </p>

          <ul className="flex mt-5">
            {socials.map(({ id, bg, link, icon, text }) => (
              <li
                key={id}
                style={{ backgroundColor: bg }}
                className="p-5 rounded-2xl m-1"
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <img src={icon} alt={text} className="size-10 mr-5" />
                </a>
              </li>
            ))}
          </ul>

          {/* send message */}
          <div className="px-5 mt-10 pb-3 border border-gray-500 rounded-2xl">
            <h2 className="text-3xl  font-bold text-gray-900 my-5 text-center font-poppins ">
              Send Me a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 px-2">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Input your name"
                  required
                  className="w-full  border border-slate-700 text-gray-600 placeholder-slate-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your email"
                  required
                  className="w-full  border border-slate-700 text-black placeholder-slate-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium  text-gray-600 mb-2">
                  No HP
                </label>

                <input
                  type="text"
                  name="nohp"
                  value={form.nohp}
                  onChange={handleChange}
                  placeholder="08xxxxxxxxxx"
                  required
                  className="w-full border border-slate-700 text-black placeholder-slate-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium  text-gray-600 mb-2">
                  Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  className="w-full  border border-slate-700 text-black placeholder-slate-500 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition duration-300 shadow-lg hover:shadow-sky-500/30"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
