import Image from "next/image";

export default function Products() {
    return (
        <section className="py-16" style={{ backgroundColor: "#fafaff" }}>
            <div className="container mx-auto px-28">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-sm font-semibold uppercase tracking-wider font-body" style={{ color: "#cf9b17", letterSpacing: "0.2em" }}>
                            ANTHÉOR PARIS
                        </span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold leading-tight font-serif mb-4" style={{ color: "#362532" }}>
                        Nous achetons, aux meilleurs prix, et comptant
                    </h2>

                    {/* Decorative line with diamond */}
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-48 h-[1.5px]" style={{ backgroundColor: "#a994a4" }}></div>
                        <div className="w-1 h-1 rotate-45" style={{ backgroundColor: "#cf9b17" }}></div>
                        <div className="w-48 h-[1.5px]" style={{ backgroundColor: "#a994a4" }}></div>
                    </div>
                </div>        
                {/* Products Grid */}
                <div className="space-y-6">
                    {/* First Row - 2 Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* OR */}
                        <div className="relative bg-black overflow-hidden h-64 group">
                            <Image
                                src="/img/Color-Fill-592.jpg"
                                alt="Or - Gold jewelry"
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <h3 className="text-2xl font-bold mb-2 font-serif">OR</h3>
                                <div className="w-6 h-[2px] mb-3" style={{ backgroundColor: "#eab120" }}></div>
                                <p className="text-sm font-body opacity-90">
                                    Débris d'or - Or cassé - Or dentaire Médailles - Bracelets Colliers... à 32€ le gramme de 18K et jusqu'à 50€/g
                                </p>
                            </div>
                        </div>

                        {/* PIÈCES OR & ARGENT */}
                        <div className="relative bg-black overflow-hidden h-64 group">
                            <Image
                                src="/img/Rectangle-5782.jpg"
                                alt="Pièces Or & Argent"
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <h3 className="text-2xl font-bold mb-2 font-serif">PIÈCES OR & ARGENT</h3>
                                <div className="w-6 h-[2px] mb-3" style={{ backgroundColor: "#eab120" }}></div>
                                <p className="text-sm font-body opacity-90">
                                    Pièces françaises et étrangères : Napoléon 20 Francs, 20 Dollars US, 50 Pesos Mexicain, souverain...
                                </p>
                            </div>
                        </div>
                        
                    </div>

                    {/* Second Row - 2 Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* BIJOUX & MONTRES */}
                        <div className="relative bg-black  overflow-hidden h-64 group">
                            <Image
                                src="/img/Color-Fill-592.jpg"
                                alt="Bijoux & Montres"
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <h3 className="text-2xl font-bold mb-2 font-serif">BIJOUX & MONTRES</h3>
                                <div className="w-6 h-[2px] mb-3" style={{ backgroundColor: "#eab120" }}></div>
                                <p className="text-sm font-body opacity-90">
                                    Montres de marque, pierres précieuses, bijoux d'occasion, bijoux modernes, bijoux de marque ( Rolex, patek philippe... )
                                </p>
                            </div>
                        </div>

                        {/* ARGENTERIE */}
                        <div className="relative bg-black  overflow-hidden h-64 group">
                            <Image
                                src="/img/Color-Fill-598.jpg"
                                alt="Argenterie"
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <h3 className="text-2xl font-bold mb-2 font-serif">ARGENTERIE</h3>
                                <div className="w-6 h-[2px] mb-3" style={{ backgroundColor: "#eab120" }}></div>
                                <p className="text-sm font-body opacity-90">
                                    Pièces de forme, couverts en métal argenté et argent massif ( Odiot - Christofle - Puiforcat... )
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Third Row - 3 Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* DIAMANTS */}
                        <div className="relative bg-black  overflow-hidden h-64 group">
                            <Image
                                src="/img/diamond-classic.jpg"
                                alt="Diamants"
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <h3 className="text-2xl font-bold mb-2 font-serif">DIAMANTS</h3>
                                <div className="w-6 h-[2px] mb-3" style={{ backgroundColor: "#eab120" }}></div>
                                <p className="text-sm font-body opacity-90">
                                    
                                </p>
                            </div>
                        </div>

                        {/* ARGENT */}
                        <div className="relative bg-black  overflow-hidden h-64 group">
                            <Image
                                src="/img/Rectangle-5783.jpg"
                                alt="Argent"
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <h3 className="text-2xl font-bold mb-2 font-serif">ARGENT</h3>
                                <div className="w-6 h-[2px] mb-3" style={{ backgroundColor: "#eab120" }}></div>
                                <p className="text-sm font-body opacity-90">
                                    Toutes pièces en argent massif
                                </p>
                            </div>
                        </div>

                        {/* ANTIQUITÉS */}
                        <div className="relative bg-black  overflow-hidden h-64 group">
                            <Image
                                src="/img/Rectangle-5784.jpg"
                                alt="Antiquités"
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />                            
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <h3 className="text-2xl font-bold mb-2 font-serif">ANTIQUITÉS</h3>
                                <div className="w-6 h-[2px] mb-3" style={{ backgroundColor: "#eab120" }}></div>
                                <p className="text-sm font-body opacity-90">
                                    Tableaux, sculptures, bronzes, art asiatique, art déco...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
