import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white pt-5 pb-7 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Akbar. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/akbardermawan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition flex"
          >
            <FaGithub className="w-5 h-5 mx-1 mt-1" />
            <p className="hidden md:flex md:ml-1">Github</p>
          </a>
          <a
            href="https://www.linkedin.com/in/akbar-dermawan-30bb6a210/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition flex"
          >
            <FaLinkedin className="w-5 h-5 mx-1  mt-1" />
            <p className="hidden md:flex md:ml-1">LinkedIn</p>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#search/akbardermawan27%40gmail.com"
            className="hover:text-blue-400 transition flex"
          >
            <MdOutlineEmail className="w-5 h-5 mx-1  mt-1" />
            <p className="hidden md:flex md:ml-1">Email</p>
          </a>
          <a
            href="https://www.youtube.com/@ADM.code1"
            className="hover:text-blue-400 transition flex"
          >
            <FaYoutube className="w-5 h-5 mx-1  mt-1" />
            <p className="hidden md:flex md:ml-1">YouTube</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
