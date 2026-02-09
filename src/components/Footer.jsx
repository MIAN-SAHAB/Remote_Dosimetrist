import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faFacebookF, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="w-full bg-white relative">
      {/* Top Section with Logo */}
      <div className="flex justify-center pt-16 pb-12">
        <img src="assets/logo-main.png" alt="Remote Dosimetrist" className="h-16" />
      </div>

      {/* content Section */}
      <div className="container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Get on the List */}
          <div className="flex flex-col items-center md:items-start mx-auto w-full max-w-sm">
            <h3 className="text-[#003777] font-bold text-xl tracking-widest mb-4 uppercase">Get on the List</h3>
            <p className="text-gray-600 mb-6 text-center md:text-left">
              Join our mailing list for exclusive promotions, discounts and more!
            </p>
            <div className="w-full">
              <input
                type="email"
                placeholder="EMAIL"
                className="w-full bg-gray-200 p-4 mb-3 text-sm focus:outline-none"
              />
              <button className="w-full border border-gray-400 py-3 text-[#003777] font-bold text-sm tracking-widest hover:bg-[#003777] hover:text-white transition-colors uppercase">
                Sign Up
              </button>
            </div>
            <div className="flex space-x-6 mt-6">
              <a href="#" className="text-[#003777] hover:text-blue-800 text-xl"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="#" className="text-[#003777] hover:text-blue-800 text-xl"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="text-[#003777] hover:text-blue-800 text-xl"><FontAwesomeIcon icon={faYoutube} /></a>
              <a href="#" className="text-[#003777] hover:text-blue-800 text-xl"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center md:justify-start space-x-12 pt-8 md:pt-14 mx-auto">
            <div className="flex flex-col space-y-4 text-xs font-bold tracking-widest text-[#595959] uppercase">
              <a href="#home" className="hover:text-[#003777]">Home</a>
              <a href="#about" className="hover:text-[#003777]">About</a>
              <a href="#focus" className="hover:text-[#003777]">Areas of Focus</a>
              <a href="#plans" className="hover:text-[#003777]">Our Plans</a>
            </div>
            <div className="flex flex-col space-y-4 text-xs font-bold tracking-widest text-[#595959] uppercase">
              <a href="#process" className="hover:text-[#003777]">Process</a>
              <a href="#systems" className="hover:text-[#003777]">Systems</a>
              <a href="#blog" className="hover:text-[#003777]">Our Blog</a>
              <a href="#contact" className="hover:text-[#003777]">Contact</a>
            </div>
          </div>

          {/* Our Location */}
          <div className="flex flex-col items-center md:items-start mx-auto w-full">
            <h3 className="text-[#003777] font-bold text-xl tracking-widest mb-6 uppercase">Our Location</h3>
            <div className="w-full h-48 bg-gray-200 overflow-hidden relative">
              {/* Placeholder for map - using a simple gray background with text if image missing, 
                             or assuming an iframe or image would go here. 
                             For now, creating a visual placeholder that looks like a map area. */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1647525367855!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Map"
                className="opacity-70 grayscale"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#003777] py-4 text-center">
        <p className="text-white text-[10px] tracking-widest font-normal">
          Copyright © 2025. <span className="font-bold">REMOTE DOSIMETRIST</span>. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}