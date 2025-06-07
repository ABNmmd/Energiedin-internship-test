import { FaComments, FaPhoneAlt } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

export default function ContactServices() {
  return (
    <section className="py-14" style={{ backgroundColor: "#24101f" }}>
      <div className="container mx-auto px-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service 1 - Conseils */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center">
                <FaComments className="text-3xl" style={{ color: "#cf9b17" }} />
              </div>
            </div>
            <h3 className="text-white font-sans text-base font-semibold mb-4 leading-tight">
              Besoin de conseils ? n'hésitez pas à<br />nous contacter
            </h3>
          </div>

          {/* Service 2 - Spécialiste */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center" >
                <FaPhoneAlt className="text-3xl" style={{ color: "#cf9b17" }} />
              </div>
            </div>
            <h3 className="text-white font-sans text-base font-semibold mb-4 leading-tight">
              Vous souhaitez vendre de l'or ? faites<br />appel à un spécialiste de rachat
            </h3>
          </div>

          {/* Service 3 - Sécurité */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center">
                <IoShieldCheckmarkSharp className="text-3xl" style={{ color: "#cf9b17" }} />
              </div>
            </div>
            <h3 className="text-white font-sans text-base font-semibold mb-4 leading-tight">
              Réalisez vos transactions en toute<br />sécurité et en toute discrétion
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
