import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FooterOffCode = () => {
  return (
    <div className="bg-gray-700 px-5 pt-10 pb-10  ">
      <div className="w-full max-w-6xl flex flex-col md:flex-row mx-auto px-4 border-gray-300 border-t">
        <div className="w-full md:w-[50%]">
          <div className="mt-5">
            <p className="hidden md:block text-white font-noto text-2xl">
              Akbar Dermawan Mahbubillah
            </p>
            <p className="font-poppin text-gray-300">Let's Connect</p>
            <ul className="flex">
              <li className="m-1 md:m-2 rounded-full w-10 md:w-13 h-10 md:h-13 border-solid border flex items-center justify-center cursor-pointer  text-gray-300 hover:bg-gray-300 hover:text-gray-800">
                <a
                  href="https://mail.google.com/mail/u/0/#search/akbardermawan27%40gmail.com"
                  target="_blank"
                >
                  <MdOutlineEmail className="w-6 md:w-8 h-6 md:h-8 " />
                </a>
              </li>
              <li className="m-1 md:m-2 rounded-full w-10 md:w-13 h-10 md:h-13 border-solid border flex items-center justify-center cursor-pointer text-gray-300 hover:bg-gray-300 hover:text-gray-800">
                <a href="https://www.youtube.com/@ADM.code1" target="_blank">
                  <FaYoutube className="w-6 md:w-8 h-6 md:h-8 " />
                </a>
              </li>
              <li className="m-1 md:m-2 rounded-full w-10 md:w-13 h-10 md:h-13 border-solid border flex items-center justify-center cursor-pointer text-gray-300 hover:bg-gray-300 hover:text-gray-800">
                <a
                  href="https://www.facebook.com/akbar.dermawan.965/"
                  target="_blank"
                >
                  <FaFacebookF className="w-6 md:w-8 h-6 md:h-8 " />
                </a>
              </li>
              <li className="m-1 md:m-2 rounded-full w-10 md:w-13 h-10 md:h-13 border-solid border flex items-center justify-center cursor-pointer text-gray-300 hover:bg-gray-300 hover:text-gray-800">
                <a
                  href="https://www.instagram.com/akbardermawanzzz/?hl=en"
                  target="_blank"
                >
                  <FaInstagram className="w-6 md:w-8 h-6 md:h-8 " />
                </a>
              </li>
              <li className="m-1 md:m-2 rounded-full w-10 md:w-13 h-10 md:h-13 border-solid border flex items-center justify-center cursor-pointer text-gray-300 hover:bg-gray-300 hover:text-gray-800">
                <a href="">
                  <FaWhatsapp className="w-6 md:w-8 h-6 md:h-8 " />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-[50%] mt-4 md:mt-0">
          <p className="font-poppins text-justify mt-2 text-gray-300">
            Jl. PB. Sudirman No. 01, Tembokrejo Village, Gumukmas District,
            Jember Regency, East Java Province, Indonesia, 68165.
          </p>
          <div className="flex items-center text-gray-300">
            <FaPhoneAlt className="mr-2 " />
            <span className="font-poppins">No. HP: 082337528525</span>
          </div>
          <div className="flex items-center text-gray-300">
            <MdOutlineEmail className="mr-2 " />
            <span className="font-poppins">
              Email: akbardermawan27@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl border-t border-dashed border-gray-40 mt-5 p-5 flex items-center justify-center text-sm md:text-md text-center text-gray-300 mx-auto">
        © Copyright akbardermawan27@gmail.com 2026
      </div>
    </div>
  );
};

export default FooterOffCode;
