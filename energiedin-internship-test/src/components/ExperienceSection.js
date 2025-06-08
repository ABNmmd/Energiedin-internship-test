import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="py-16" style={{ backgroundColor: "#fafaff" }}>
      <div className="container mx-auto px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-3">
            {/* Main Text */}
            <div className="space-y-4 p-8 bg-white shadow-sm text-justify leading-4" style={{ color: "#24101f" }}>
              <p className="text-base font-semibold font-serif">
                Voilà maintenant <span className="font-bold text-xl" style={{ color: "#d39d15" }}>plus de 20 ans</span> que notre comptoir 
                spécialisé Anthéor est présent sur le marché.
              </p>
              
              <p className="text-base font-body">
                N'hésitez pas à faire appel au spécialiste de l'achat et de la 
                vente d'Or <span className="font-semibold">numéro 1 à Paris</span>
              </p>
              
              <p className="text-base font-body">
                Nous vous conseillons <span className="font-semibold">gratuitement</span> et en toute 
                <span className="font-semibold"> discrétion</span>. Des milliers de clients nous font confiance, 
                faites comme eux !
              </p>
            </div>
              {/* Contact Box */}
            <div 
              className="p-8 text-center relative bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/img/L11.jpg')"
              }}
            >
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-white font-serif text-xl font-normal mb-2">
                  CONTACTEZ-NOUS
                </h3>
                <div className="w-28 h-0.5 mx-auto mb-4" style={{ backgroundColor: "#cf9b17" }}></div>
                <div className="space-y-1" style={{ color: "#e7dee5" }}>
                  <p className="font-body text-lg">
                    01 42 89 53 18
                  </p>
                  <p className="font-body text-lg">
                    contact@antheor-paris.fr
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Store Image */}
          <div className="h-full">
            <Image
              src="/img/img2.jpg"
              alt="Magasin Antheor Paris - Achat Or"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
