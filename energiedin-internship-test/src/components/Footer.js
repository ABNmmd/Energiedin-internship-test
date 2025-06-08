import { FaPhoneAlt, FaCalendarCheck, FaEnvelope, FaMapMarkerAlt, FaAngleDoubleRight } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative" style={{ backgroundColor: "#24101f" }}>
      {/* Top Buttons */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        <button className="px-8 py-3 text-white font-serif font-semibold text-lg flex items-center gap-3 hover:opacity-90 transition-opacity rounded shadow" style={{ backgroundColor: "#cf9b17" }}>
          <FaPhoneAlt className="text-xl" />
          ÊTRE RAPPELÉ
        </button>
        <button className="px-8 py-3 text-white font-serif font-semibold text-lg flex items-center gap-3 hover:opacity-90 transition-opacity rounded shadow" style={{ backgroundColor: "#cf9b17" }}>
          <FaCalendarCheck className="text-xl" />
          PRENDRE RDV
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="pt-16 pb-8">
        <div className="container mx-auto px-28">
          <div className="flex justify-between">            
            {/* Company Info */}
            <div className="lg:pr-8">
              <div className="mb-6">
                <Image
                  src="/img/logo-footer.png"
                  alt="Anthéor Paris"
                  width={290}
                  height={200}
                  className="h-auto"
                />
              </div>
              
            </div>

            {/* Liens Utiles */}
            <div>
              <h3 className="text-white font-body font-bold text-sm mb-1">
                LIENS UTILES
              </h3>
              <div className="w-5 h-0.5 mb-6" style={{ backgroundColor: "#eab120" }}></div>
              <div className="grid grid-cols-2 gap-y-6 gap-x-1" style={{ color: "#cfd3d7" }}>
                <a href="#" className="font-body text-xs hover:text-yellow-400 transition-colors flex items-center">
                  <span className="mr-2 text-[10px]" style={{ color: "#cf9b17" }}><FaAngleDoubleRight /></span>
                  Rachat OR
                </a>
                <a href="#" className="font-body text-xs hover:text-yellow-400 transition-colors flex items-center">
                  <span className="mr-2 text-[10px]" style={{ color: "#cf9b17" }}><FaAngleDoubleRight /></span>
                  Mentions Légales
                </a>
                <a href="#" className="font-body text-xs hover:text-yellow-400 transition-colors flex items-center">
                  <span className="mr-2 text-[10px]" style={{ color: "#cf9b17" }}><FaAngleDoubleRight /></span>
                  Diamants
                </a>
                <a href="#" className="font-body text-xs hover:text-yellow-400 transition-colors flex items-center">
                  <span className="mr-2 text-[10px]" style={{ color: "#cf9b17" }}><FaAngleDoubleRight /></span>
                  Politique de Confidentialité
                </a>
                <a href="#" className="font-body text-xs hover:text-yellow-400 transition-colors flex items-center">
                  <span className="mr-2 text-[10px]" style={{ color: "#cf9b17" }}><FaAngleDoubleRight /></span>
                  Argenterie
                </a>
                <a href="#" className="font-body text-xs hover:text-yellow-400 transition-colors flex items-center">
                  <span className="mr-2 text-[10px]" style={{ color: "#cf9b17" }}><FaAngleDoubleRight /></span>
                  Contact
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-body font-bold text-sm mb-1">
                INFOS
              </h3>
              <div className="w-5 h-0.5 mb-6" style={{ backgroundColor: "#eab120" }}></div>
              <div className="space-y-4" style={{ color: "#cfd3d7" }}>
                <div className="flex items-center gap-6">
                  <FaPhoneAlt className="text-yellow-400 text-sm flex-shrink-0" />
                  <span className="font-body text-xs font-semibold">01 42 89 53 18</span>
                </div>
                <div className="flex items-center gap-6">
                  <FaEnvelope className="text-yellow-400 text-sm flex-shrink-0" />
                  <span className="font-body text-xs font-semibold">contact@antheor-paris.fr</span>
                </div>
                <div className="flex items-start gap-6">
                  <FaMapMarkerAlt className="text-yellow-400 text-sm flex-shrink-0 mt-1" />
                  <div className="font-body text-xs font-semibold leading-relaxed">
                    <p>8, Rue Corvetto 75008, Paris</p>
                    <p>FRANCE</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      {/* Bottom Copyright */}
      <div className="py-6" style={{ backgroundColor: "#1c0d18" }}>
        <div className="container mx-auto px-28">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 font-body text-xs">
              Copyright www.antheor-paris.fr 2016 - 2025 © - All rights reserved - Tous droits réservés
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gray-300 font-body text-xs">
                Développement & Référencement naturel par
              </span>
              <Image
                src="/img/logo-ed.png"
                alt="Energiedin"
                width={90}
                height={20}
                className="h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
