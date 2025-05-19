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
              <li className="hover:underline">
                <Link>Contact Us</Link>
              </li>
              <li className="hover:underline">
                <Link>Ethics/Code of Conduct</Link>
              </li>
              <li className="hover:underline">
                <Link>Privacy Policy & Trademarks</Link>
              </li>
              <li className="hover:underline">
                <Link>Accessibility</Link>
              </li>
              <li className="hover:underline">
                <Link>Privacy Tools & Resources</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-[4vmin] flex-wrap md:flex-nowrap text-green-900">
              <li className="hover:text-green-700">
                <Link>
                  <Instagram />
                </Link>
              </li>
              <li className="hover:text-green-700">
                <Link>
                  <Twitter />
                </Link>
              </li>
              <li className="hover:text-green-700">
                <Link>
                  <Youtube />
                </Link>
              </li>
              <li className="hover:text-green-700">
                <Link>
                  <Linkedin />
                </Link>
              </li>
              <li className="hover:text-green-700">
                <Link>
                  <Facebook />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between flex-wrap items-center">
          <p className="font-bold">PCL Clone</p>
          <div className="flex flex-wrap text-xs">
            <p>Copyright © 2025 PCL Clone</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
