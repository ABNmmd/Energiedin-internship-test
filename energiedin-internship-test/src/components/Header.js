"use client";

import Image from "next/image";
import {
  FaPhone,
  FaCalendarCheck,
  FaPaperPlane,
  FaComments,
  FaChevronDown,
} from "react-icons/fa6";
import { useState } from "react";

const menuItems = [
  { name: "Accueil", href: "/", subMenu: false, active: true },
  { name: "Rachat Or", href: "/rachat-or", subMenu: true, active: false },
  { name: "Argent", href: "/argent", subMenu: true, active: false },
  { name: "Argenterie", href: "/argenterie", subMenu: false, active: false },
  { name: "Bijoux", href: "/bijoux", subMenu: true, active: false },
  { name: "Antiquités", href: "/antiquites", subMenu: false, active: false },
  { name: "Diamants", href: "/diamants", subMenu: false, active: false },
  { name: "Montres", href: "/montres", subMenu: false, active: false },
  { name: "Tableaux", href: "/tableaux", subMenu: false, active: false },
  { name: "Contact", href: "/contact", subMenu: false, active: false },
  { name: "Plan d'acces", href: "/plan-d-acces", subMenu: false, active: false },
  { name: "Qui sommes-nous", href: "/qui-sommes-nous", subMenu: false, active: false },
  { name: "Blog", href: "/blog", subMenu: false, active: false },
];

export default function Header() {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (itemName) => {
    setOpenSubmenu(openSubmenu === itemName ? null : itemName);
  };
  return (
    <header className="">      <style jsx>{`
        .active-underline::after {
          background-color: #cf9b17 !important;
        }
        .active-topline::before {
          content: '';
          position: absolute;
          top: -16px;
          left: 0;
          right: 0;
          height: 1px;
          background-color: #cf9b17;
        }
      `}</style>
      {/* Top */}
      <div style={{ backgroundColor: "#24101f" }} className="text-white">
        <div className="container mx-auto px-28 flex justify-between">          <div className="flex border-l border-r border-gray-600">
            <a
              href=""
              className="flex items-center gap-2 text-sm font-medium px-4 py-2"
              style={{ color: "white" }}
              onMouseEnter={(e) => e.target.style.color = "#e7b22b"}
              onMouseLeave={(e) => e.target.style.color = "white"}
            >
              <FaPhone style={{ color: "#e7b22b" }} />
              Etre Rappelé
            </a>
            <div className="w-px bg-gray-600"></div>
            <a
              href=""
              className="flex items-center gap-2 text-sm font-medium px-4 py-2"
              style={{ color: "white" }}
              onMouseEnter={(e) => e.target.style.color = "#e7b22b"}
              onMouseLeave={(e) => e.target.style.color = "white"}
            >
              <FaCalendarCheck style={{ color: "#e7b22b" }} />
              Prendre RDV
            </a>
          </div>
          <div className="flex border-l border-r border-gray-600">
            <a
              href=""
              className="flex items-center gap-2 text-sm font-medium px-4 py-2"
              style={{ color: "white" }}
              onMouseEnter={(e) => e.target.style.color = "#e7b22b"}
              onMouseLeave={(e) => e.target.style.color = "white"}
            >
              <FaPaperPlane style={{ color: "#e7b22b" }} />
              Formulaire de contact
            </a>
            <div className="w-px bg-gray-600"></div>
            <a
              href=""
              className="flex items-center gap-2 text-sm font-medium px-4 py-2"
              style={{ color: "white" }}
              onMouseEnter={(e) => e.target.style.color = "#e7b22b"}
              onMouseLeave={(e) => e.target.style.color = "white"}
            >
              <FaComments style={{ color: "#e7b22b" }} />
              Chat en ligne
            </a>
          </div>
        </div>
      </div>
      {/* header/menu */}
      <div className="bg-white py-6">
        {/* logos and stuff */}
        <div className="container mx-auto px-28 flex justify-between items-center">
          {/* left */}
          <div className="flex items-center gap-3">
            <div>
              <Image
                src="/img/Forma-1-copy.png"
                alt="contact"
                width={28}
                height={28}
              />
            </div>
            <div>
              <h2 className="text-sm font-bold" style={{ color: "#24101f" }}>
                01 42 89 53 18
              </h2>
              <p className="text-sm font-bold" style={{ color: "#24101f" }}>
                contact@antheor-paris.fr
              </p>
            </div>
          </div>{" "}
          {/* Logo */}
          <div className="text-center mx-16">
            <a href="">
              <Image
                src="/img/logo-header.png"
                alt="Logo"
                width={300}
                height={240}
              />
            </a>
          </div>
          {/* right */}
          <div className="flex items-center gap-3">
            <div>
              <Image
                src="/img/L1-copy.png"
                alt="Logo 2"
                width={28}
                height={28}
              />
            </div>
            <div>
              <h2 className="text-sm font-bold" style={{ color: "#24101f" }}>
                8, RUE CORVETTO
                <br />
                75008 PARIS
              </h2>
            </div>
          </div>
        </div>
        {/* menu */}
        <nav className="border-t border-gray-200 pt-4 mt-8">          <div className="container mx-auto px-28">
              <ul className="flex gap-4 justify-between">
                {menuItems.map((item) => (                  <li
                    key={item.name}
                    className={`relative ${item.subMenu ? "has-submenu" : ""}`}
                  >                    <a
                      href={item.subMenu ? "#" : item.href}                      className={`text-sm font-semibold flex items-center gap-1 relative ${
                        item.active 
                          ? "active-topline" 
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                      style={item.active ? { color: "#cf9b17" } : {}}
                      onMouseEnter={item.active ? undefined : (e) => e.target.style.color = "#1d4ed8"}
                      onMouseLeave={item.active ? undefined : (e) => e.target.style.color = "#374151"}
                      onClick={
                        item.subMenu
                          ? (e) => {
                              e.preventDefault();
                              toggleSubmenu(item.name);
                            }
                          : undefined
                      }
                    >
                      {item.name}                      {item.subMenu && (
                        <FaChevronDown
                          className={`text-[9px] transition-transform duration-200 ${
                            openSubmenu === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </a>
                    {item.subMenu && openSubmenu === item.name && (
                      <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md p-2 min-w-48 z-10">
                        <li className="text-gray-500 text-sm p-2">
                          Submenu items coming soon...
                        </li>
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
