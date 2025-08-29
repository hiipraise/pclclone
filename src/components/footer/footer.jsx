import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-[#f9f9f9] flex items-center justify-center">
      <div className="p-[5vw] w-full space-y-10">
        <div className="flex w-full justify-between flex-wrap gap-[5vmin]">
          <div>
            <ul className="flex flex-wrap md:flex-nowrap font-medium text-black/80 gap-[3vmin]">
              {[
                "Contact Us",
                "Ethics/Code of Conduct",
                "Privacy Policy & Trademarks",
                "Accessibility",
                "Privacy Tools & Resources",
              ].map((item) => (
                <li key={item} className="hover:underline">
                  <Link>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex gap-[4vmin] flex-wrap md:flex-nowrap text-green-900">
              {[
                <Instagram />,
                <Twitter />,
                <Youtube />,
                <Linkedin />,
                <Facebook />,
              ].map((item) => (
                <li key={item} className="hover:text-green-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between flex-wrap items-center">
          <p className="font-bold">PCL Clone</p>
          <div className="flex flex-wrap text-xs">
            <p>Copyright &copy; 2025 PCL Clone</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
