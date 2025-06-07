import { FaStore, FaHome } from "react-icons/fa";

export default function Process() {
    return (
        <section className="py-8" style={{ backgroundColor: "#fafaff" }}>
            <div className="container mx-auto px-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-18">
                    {/* Left Side - Process Information */}
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-12 h-0.5" style={{ backgroundColor: "#cf9b17" }}></div>
                            <span className="text-sm font-semibold uppercase" style={{ letterSpacing: "0.2em", color: "#cf9b17" }}>
                                ANTHÉOR PARIS
                            </span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900 leading-tight">
                            Comment se déroule le rachat de votre or ?
                        </h2>
                    </div>

                    {/* Right Side - Expertise Options */}
                    <div className="pt-4">
                        <h3 className="text-2xl font-bold mb-5 font-body" style={{ color: "#cf9b17" }}>
                            Expertises Gratuites
                        </h3>

                        <div className="space-y-2">
                            {/* En boutique option */}
                            <div className="flex items-center gap-5">
                                <div className="">
                                    <FaStore className="text-2xl relative bottom-1" style={{ color: "#cf9b17" }} />
                                </div>
                                <div>
                                    <p className="text-xl font-bold mb-1" style={{ color: "#362532" }}>
                                        En boutique à Paris (Cadre Sécurisé)
                                    </p>
                                </div>
                            </div>

                            {/* À domicile option */}
                            <div className="flex items-center gap-5">
                                <div className="">
                                    <FaHome className="text-2xl relative bottom-1" style={{ color: "#cf9b17" }} />
                                </div>
                                <div>
                                    <p className="text-xl font-bold mb-1" style={{ color: "#362532" }}>
                                        Ou à votre Domicile (sur rendez-vous)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
