"use client";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="container mx-auto px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - Split into Top and Bottom */}
          <div className="flex flex-col gap-6">
            {/* Top Section - Text Content */}
            <div className="bg-white shadow-lg py-8 px-4 lg:p-8 ">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold uppercase" style={{ letterSpacing: "0.1em", color: "#cf9b17" }}>
                  ANTHÉOR PARIS
                </span>
              </div>

              <h2 className="text-base lg:text-lg font-semibold font-serif mb-6 text-gray-900">
                Nous sommes spécialisés dans le rachat d'Or,
                d'Argent & d'Antiquités, depuis plus de 20 ans.
              </h2>
              {/* Product List */}
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-[10px]" style={{ color: "#cf9b17" }}><FaCheck /></span>
                  <p className="text-sm" style={{ color: "#646774" }}>
                    Achat de métaux précieux : Or (à 32€ le gramme de 18K et jusqu'à 59€/g) - Argent - Platine
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-[10px]" style={{ color: "#cf9b17" }}><FaCheck /></span>
                  <p className="text-sm" style={{ color: "#646774" }}>
                    Pièces or et argent - Lingots or et argent
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-[10px]" style={{ color: "#cf9b17" }}><FaCheck /></span>
                  <p className="text-sm" style={{ color: "#646774" }}>
                    Argenterie ancienne ( Odiot - Christofle - Puiforcat )
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-[10px]" style={{ color: "#cf9b17" }}><FaCheck /></span>
                  <p className="text-sm" style={{ color: "#646774" }}>
                    Bijoux d'occasion, bijoux modernes, bijoux de marque (Van-Cleef, Cartier...)
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-[10px]" style={{ color: "#cf9b17" }}><FaCheck /></span>
                  <p className="text-sm" style={{ color: "#646774" }}>
                    Montres de marque (Rolex, Patek Philippe, Audemards Piguet...)
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0 text-[10px]" style={{ color: "#cf9b17" }}><FaCheck /></span>
                  <p className="text-sm" style={{ color: "#646774" }}>
                    Antiquités (Tableaux, Bronzes, Bibelots, Art des années 30 et 50...)
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Section - Review */}
            <div className="bg-white shadow-lg relative overflow-hidden">
              <div
                className="relative h-full flex items-center justify-center p-4"
                style={{
                  backgroundImage: "url('/img/L00011.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}
              >
                <div className="text-center text-white">
                  <div className="text-lg font-normal">9.9/10</div>
                  <div className="flex justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl" style={{ color: "#eab120" }}>★</span>
                    ))}
                  </div>
                  <div className="text-3xl font-semibold">Excellent</div>
                  <div className="text-xs font-light opacity-90 mb-2">Basé sur 89 avis</div>

                  <div className="flex items-center justify-center">
                    <Image
                      src="/img/Google-Reviews.png"
                      alt="Google Reviews"
                      width={100}
                      height={30}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Single Image */}
          <div className="bg-white shadow-lg relative overflow-hidden">
            <div className="relative h-96 lg:h-auto lg:min-h-full">
              <Image
                src="/img/Rectangle-581.jpg"
                alt="Luxury items showcase"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
