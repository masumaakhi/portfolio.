"use client";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

// Dynamic import for icons to reduce bundle size
const FaInstagram = dynamic(() => import("react-icons/fa").then(mod => ({ default: mod.FaInstagram })), { ssr: false });
const FaLinkedinIn = dynamic(() => import("react-icons/fa").then(mod => ({ default: mod.FaLinkedinIn })), { ssr: false });
const FaEnvelope = dynamic(() => import("react-icons/fa").then(mod => ({ default: mod.FaEnvelope })), { ssr: false });
const FaPhoneAlt = dynamic(() => import("react-icons/fa").then(mod => ({ default: mod.FaPhoneAlt })), { ssr: false });
const FaFacebook = dynamic(() => import("react-icons/fa").then(mod => ({ default: mod.FaFacebook })), { ssr: false });
const FaGithub = dynamic(() => import("react-icons/fa").then(mod => ({ default: mod.FaGithub })), { ssr: false });
const FaTwitter = dynamic(() => import("react-icons/fa").then(mod => ({ default: mod.FaTwitter })), { ssr: false });

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <footer id="footer" className="bg-slate-800 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-10">
        {/* Logo */}
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
          LOGO
        </h2>

        {/* Nav Links */}
        <ul className="flex justify-center flex-wrap gap-6 text-md font-medium">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/tech">Tech Stack</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact me</a></li>
        </ul>

        {/* Social Icons */}
        {mounted && (
          <div className="social-icons flex justify-center gap-6 text-xl">
            <a
              href="https://www.linkedin.com/in/masuma-akter-akhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="icons"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com/masuma.akhii"
              target="_blank"
              rel="noopener noreferrer"
              className="icons"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/masumaakhi"
              target="_blank"
              rel="noopener noreferrer"
              className="icons"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/Masumaakhi12"
              target="_blank"
              rel="noopener noreferrer"
              className="icons"
            >
              <FaTwitter />
            </a>
            {/* <a
              href="https://youtu.be/tKyYwDWzrHc?feature=shared"
              target="_blank"
              rel="noopener noreferrer"
              className="icons"
            >
              <FaYoutube />
            </a> */}
            {/* Optional Instagram */}
            <a
              href="https://www.instagram.com/masuma.akhii/"
              target="_blank"
              rel="noopener noreferrer"
              className="icons"
            >
              <FaInstagram />
            </a>
          </div>
        )}

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-md">
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>masumaakterakhi90@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+8801571300265</span>
          </div>
        </div>

        {/* Divider & Credits */}
        <div className="h-px bg-gray-600 w-full mt-6" />

        <p className="text-sm text-gray-400 pt-2">
          © 2025 All rights reserved. Designed by <span className="text-white font-semibold">@masuma</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
