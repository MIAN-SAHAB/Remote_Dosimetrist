import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const wrapperRef = useRef(null);
  const [alreadyShown, setAlreadyShown] = useState(sessionStorage.getItem("preloaderShown"));
  useEffect(() => {
    if (alreadyShown) {
      setAlreadyShown(true);
    }
  }, [alreadyShown])
  return (
    <header ref={wrapperRef} style={{ opacity: alreadyShown ? 1 : 0 }} className="relative w-full bg-white z-5">
      <div className="mx-auto px-6 flex items-center justify-between h-20 py-[22px] px-[140px]">
        <nav className="flex space-x-[65px] text-gray-800 font-medium text-sm">
          <a href="#home" className="hover:text-purple-700 transition-colors">Home</a>
          <a href="#about" className="hover:text-purple-700 transition-colors">About Us</a>
          <a href="#focus" className="hover:text-purple-700 transition-colors">Areas of Focus</a>
          <a href="#plans" className="hover:text-purple-700 transition-colors">Our Plans</a>
        </nav>
        <div className="flex-shrink-0">
          <img src="assets/logo-main.png" alt="Remote Dosimetrist Logo" className="h-12 w-auto" />
        </div>
        <div className="flex items-center space-x-[20px]">
          <nav className="flex space-x-[65px] text-gray-800 font-medium text-sm">
            <a href="#process" className="hover:text-purple-700 transition-colors">Process</a>
            <a href="#contact" className="hover:text-purple-700 transition-colors">Contact Us</a>
          </nav>
          <div>
            <img src="assets/search-icon.svg" alt="" />
          </div>
          <a
            href="#get-in-touch"
            className="bg-gray-800 !text-white px-5 py-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors text-sm font-medium"
          > GET IN TOUCH </a>
        </div>
      </div>
    </header>
  );
}