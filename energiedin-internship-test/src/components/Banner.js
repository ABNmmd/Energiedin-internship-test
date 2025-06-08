"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function Banner() {  
    return (    
    <section 
      className="relative text-white min-h-[350px] flex items-center py-8"
      style={{
        backgroundImage: "url('/img/Group-11.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
        {/* Navigation Arrows */}
      <button className="absolute left-25 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-1 border-white bg-white/10 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors z-10 cursor-pointer">
        <FaChevronLeft className="text-lg" />
      </button>

      <button className="absolute right-20 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-1 border-white bg-white/10 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-colors z-10 cursor-pointer">
        <FaChevronRight className="text-lg" />
      </button>
      {/* Content */}
      <div className="container mx-auto px-28 relative z-10">
        <div className="max-w-5xl">
          {/* Brand/Category Line */}
          <div className="flex items-center gap-4 mb-2">
            <div className="w-16 h-0.5" style={{ backgroundColor: "#cf9b17" }}></div>
            <span className="text-sm font-light uppercase" style={{ letterSpacing: "0.3em" }}>ANTHÉOR PARIS</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal mb-6 leading-tight">
            Rachat d'Or à Paris{" "}
            <span className="text-1xl md:text-2xl lg:text-3xl">
              ( Paiement Comptant par Chèque)
            </span>
          </h1>

          {/* Subheading */}
          <h2 className="text-xl md:text-2xl font-semibold mb-1">
            Nous achetons votre or sous toutes ses formes :
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl font-semibold" style={{ color: "#cf9b17" }}>
            (Débris or, or cassé, bijoux en or, vieil or, lingots or, pièces en or...)
          </p>
        </div>
      </div>
    </section>
  );
}
