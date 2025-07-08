"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "../assets/assets";
// import myPorfolio from "../assets/myPorfolio.pdf";

const Header = () => {
  const name = "Masuma Akter Akhi";
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="my-17 pt-[4rem]">
      <div className="max-w-[90%] mx-auto flex flex-col-reverse items-center gap-10 md:flex-col-reverse lg:grid lg:grid-cols-2 lg:items-center lg:gap-10">

        {/* === Text Section === */}
        <div className="space-y-4 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            I'm{" "}
            <span className="text-[#38BDF8] inline-block">
              {[...name].map((char, i) => (
                <span
                  key={i}
                  className={`inline-block transition-all duration-300 ease-out text-[#38BDF8] ${
                    show
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl lg:text-5xl">
            Web Developer
          </h2>

          <p className="text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0">
            A thoughtful builder and purposeful Developer, driven by technology
            and empathy. I create with care, learn with curiosity, and code to
            uplift those who need it most.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <a
              href="https://wa.me/8801571300265?text=Hello%2C%20I%20want%20to%20contact%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="HeaderContactbutton px-4 py-2 rounded-[24px] text-md bg-[#25D366] hover:bg-[#128C7E] text-white transition text-center"
            >
              Chat Now
            </a>
            <a
              href="/myPorfolio.pdf"
               download
              className="HeaderContactbutton px-4 py-2 rounded-[24px] text-md border border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8] hover:text-white transition text-center"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* === Image Section === */}
        <div className="flex justify-center lg:justify-end">
          <div className="imagaphoto relative w-70 h-70 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-[#1c2739] hover:bg-[#334155] border-2 border-[#38BDF8]">
            <Image
              src={assets.photo}
              alt="Masuma's portrait"
              className="absolute w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
