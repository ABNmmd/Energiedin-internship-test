import { FaArrowRight } from "react-icons/fa";

export default function ContactForm() {
  return (
    <section 
      className="py-10 relative overflow-hidden"
      style={{
        backgroundImage: "url('/img/Layer-0.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#362532"
      }}
    > 
      <div className="container mx-auto px-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Contact Info */}
          <div className="text-white">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-[2px]" style={{ backgroundColor: "#eab120" }}></div>
                <span className="text-sm font-semibold uppercase tracking-wider font-body" style={{ color: "#fff", letterSpacing: "0.2em" }}>
                  CONTACTEZ-NOUS
                </span>
              </div>
              
              <h2 className="text-2xl font-serif mb-1 text-white">
                Besoin d'un conseil ?
              </h2>
              
              <h3 className="text-3xl font-serif mb-6" style={{ color: "#eab120" }}>
                Une question sur l'achat de votre Or, d'un bijou... ?
              </h3>
              
              <p className="text-white font-body font-light" style={{ color: "#e4e1e1" }}>
                N'hésitez pas à nous contacter <span className="font-semibold">01 42 89 53 18</span>
              </p>
            </div>
          </div>          {/* Right Column - Contact Form */}
          <div className="bg-transparent">
            <form className="space-y-4">
              {/* First Row - Name and First Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Nom (obligatoire)"
                    className="w-full bg-transparent border-0 border-b border-gray-400 pb-3 pt-2 text-white placeholder-gray-300 focus:border-yellow-400 focus:outline-none font-body text-base"
                    style={{ borderBottomColor: "#666" }}
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Prénom (obligatoire)"
                    className="w-full bg-transparent border-0 border-b border-gray-400 pb-3 pt-2 text-white placeholder-gray-300 focus:border-yellow-400 focus:outline-none font-body text-base"
                    style={{ borderBottomColor: "#666" }}
                  />
                </div>
              </div>

              {/* Second Row - Phone and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Téléphone (obligatoire)"
                    className="w-full bg-transparent border-0 border-b border-gray-400 pb-3 pt-2 text-white placeholder-gray-300 focus:border-yellow-400 focus:outline-none font-body text-base"
                    style={{ borderBottomColor: "#666" }}
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-0 border-b border-gray-400 pb-3 pt-2 text-white placeholder-gray-300 focus:border-yellow-400 focus:outline-none font-body text-base"
                    style={{ borderBottomColor: "#666" }}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  placeholder="Message (obligatoire)"
                  rows="4"
                  className="w-full bg-transparent border-0 border-b border-gray-400 pb-3 pt-2 text-white placeholder-gray-300 focus:border-yellow-400 focus:outline-none resize-none font-body text-base"
                  style={{ borderBottomColor: "#666" }}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-2 text-black font-semibold font-body text-sm hover:opacity-90 transition-opacity rounded"
                  style={{ backgroundColor: "#fff" }}
                >
                  Envoyer
                  <span className="font-bold" style={{ color: "#cf9b17" }}>→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
