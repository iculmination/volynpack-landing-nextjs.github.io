"use client";

import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      closeMobileMenu();
    }
  };

  return (
    <header className="fixed top-0 bg-main-color box-border w-full pl-4 pr-4 pt-4 pb-4 md:pl-32 md:pr-32   flex justify-between z-50 text-gray-800 shadow-main-bottom">
      <div className="flex items-center">
        <a
          href="#main"
          className="flex flex-col items-center cursor-pointer"
          onClick={()=>scrollToElement('main')}
        >
          {/* <h2 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
            VolynPack LOGO
          </h2> */}
          <img src="logo.png" alt="" className=" w-16 lg:w-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" />
          {/* <p className="text-sm md:text-base">Паперові пакети</p> */}
        </a>
      </div>
      <nav className="hidden md:flex justify-between w-12 min-w-96 items-center">
        <a href="#about" onClick={() => scrollToElement("about")} role="button">
          <p className="text-gray-800 cursor-pointer text-sm md:text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Про нас
          </p>
        </a>
        <a
          href="#contacts"
          onClick={() => scrollToElement("contacts")}
          role="button"
        >
          <p className="text-gray-800 cursor-pointer text-sm md:text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Контакти
          </p>
        </a>
        <a href="#form" onClick={() => scrollToElement("form")} role="button">
          <p className="text-gray-800 cursor-pointer text-sm md:text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            Замовити
          </p>
        </a>
      </nav>
      <div className="md:hidden flex items-center">
        <img
          src="/hamburger-menu.svg"
          alt="burger"
          className="w-6 h-6 cursor-pointer"
          onClick={toggleMobileMenu}
        />
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 h-screen w-full bg-main-color flex flex-col items-center opacity-100">
            <button
              className="self-end text-xl mr-4 mt-4 font-bold"
              onClick={closeMobileMenu}
            >
              ✕
            </button>

            <a
              href="#about"
              onClick={() => scrollToElement("about")}
              className="cursor-pointer py-4"
            >
              Про нас
            </a>
            <a
              href="#contacts"
              onClick={() => scrollToElement("contacts")}
              className="cursor-pointer py-4"
            >
              Контакти
            </a>
            <a
              href="#form"
              onClick={() => scrollToElement("form")}
              className="cursor-pointer py-4"
            >
              Замовити
            </a>
            <div className="flex items-center py-4">
              <img
                src="/Tilda_Icons_2web_phone.svg"
                alt="call"
                className="w-6 h-6 mr-2"
              />
              <a href="tel:1234567890">+1-234-5677-890</a>
            </div>
            <div className="flex mt-4">
              <div className="w-12 h-12 lg:w-16 lg:h-16 mr-2 lg:mr-6 bgc-secondary rounded-full flex text-white text-base md:text-xl cursor-pointer text-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <a
                  href="https://www.instagram.com/volynpack.ua?igsh=anhzOTgwOHFnaXox"
                  className="flex mx-auto w-full h-full justify-center items-center"
                >
                  <img
                    src="/instagram-white-icon.webp"
                    alt="instagram"
                    className="w-5 h-5 lg:w-7 lg:h-7"
                  />
                </a>
              </div>
              <div className="w-12 h-12 lg:w-16 lg:h-16 mr-2 lg:mr-6 bgc-secondary rounded-full flex text-white text-base md:text-xl cursor-pointer text-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <a
                  href="https://www.instagram.com/volynpack.ua?igsh=anhzOTgwOHFnaXox"
                  className="flex mx-auto w-full h-full justify-center items-center"
                >
                  <img
                    src="/viber-white-icon.webp"
                    alt="viber"
                    className="w-5 h-5 lg:w-7 lg:h-7"
                  />
                </a>
              </div>
              <div className="w-12 h-12 lg:w-16 lg:h-16 bgc-secondary rounded-full flex text-white text-base md:text-xl cursor-pointer text-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <a
                  href="https://www.instagram.com/volynpack.ua?igsh=anhzOTgwOHFnaXox"
                  className="flex mx-auto w-full h-full justify-center items-center"
                >
                  <img
                    src="/telegram-white-icon.webp"
                    alt="telegram"
                    className="w-5 h-5 lg:w-7 lg:h-7"
                  />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
