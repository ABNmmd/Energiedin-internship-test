import { FaRegClock, FaMapMarkerAlt, FaSubway, FaBus } from "react-icons/fa";

export default function StoreLocation() {
  return (
    <section className="py-16" style={{ backgroundColor: "#fafaff" }}>
      <div className="container mx-auto px-28">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-1">
            <span className="text-sm font-semibold uppercase tracking-wider font-body" style={{ color: "#cf9b17", letterSpacing: "0.2em" }}>
              ANTHÉOR PARIS
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight font-serif mb-4" style={{ color: "#362532" }}>
            Se Rendre en Boutique
          </h2>
          
          {/* Decorative line with diamond */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-38 h-[1.5px]" style={{ backgroundColor: "#a994a4" }}></div>
            <div className="w-1 h-1 rotate-45" style={{ backgroundColor: "#cf9b17" }}></div>
            <div className="w-38 h-[1.5px]" style={{ backgroundColor: "#a994a4" }}></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Store Information */}
          <div className="text-white p-8" style={{ backgroundColor: "#24101f"}}>
            {/* Opening Hours Header */}
            <div className="flex items-center gap-3 mb-6">
              <FaRegClock className="text-2xl" style={{ color: "#cf9b17" }} />
              <h3 className="text-2xl font-semibold font-serif">Horaires d'ouverture</h3>
            </div>

            {/* Address */}
            <div className="mb-3">
              <div className="flex items-start gap-3 mb-4">
                <FaMapMarkerAlt className="text-lg mt-1" style={{ color: "#cf9b17" }} />
                <p className="text-base font-body">8, Rue Corvetto - 75008 Paris</p>
              </div>
            </div>

            {/* Transportation */}
            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-3">
                <FaSubway className="text-lg" style={{ color: "#cf9b17" }} />
                <span className="font-body text-base">Métro : Miromesnil (ligne 9 et 13)</span>
                <div className="flex gap-1">
                  <span className="px-2 py-1 rounded-full text-xs font-bold" style={{ color: "#24101f", backgroundColor: "#d3ca00" }}>9</span>
                  <span className="px-1.5 py-1 rounded-full text-xs font-bold" style={{ color: "#24101f", backgroundColor: "#97d5e0" }}>13</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaBus className="text-lg" style={{ color: "#cf9b17" }} />
                <span className="font-body text-base">Bus : 94 ( Lisbonne ou Mairie du 8ème )</span>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="space-y-2 mb-8 max-w-[200px] text-base">
              <div className="flex justify-between">
                <span className="font-body">Lundi</span>
                <span className="font-body">: de 13h à 17h</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body">Mardi</span>
                <span className="font-body">: de 10h à 17h</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body">Mercredi</span>
                <span className="font-body">: de 10h à 17h</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body">Jeudi</span>
                <span className="font-body">: de 10h à 17h</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body">Vendredi</span>
                <span className="font-body">: de 10h à 17h</span>
              </div>
              <div className="flex justify-between">
                <span className="font-body">Samedi</span>
                <span className="font-body">: de 10h à 17h</span>
              </div>
            </div>

            {/* Appointment Section */}
            <div>
              <h4 className="text-xl font-bold mb-3" style={{ color: "#cf9b17" }}>SUR RENDEZ-VOUS</h4>
              <p className="text-base font-body">De 17h à 19h00</p>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="bg-white overflow-hidden shadow-sm">
            {/* Map Placeholder - You can replace this with an actual map component */}
            <div className="h-full min-h-[500px] bg-gray-200 flex items-center justify-center relative">
              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.276423746275!2d2.3166!3d48.8738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc04d3b5b47%3A0x9b6c8b8b8b8b8b8b!2s8%20Rue%20Corvetto%2C%2075008%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1647360000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
