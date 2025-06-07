import { FaIdCard, FaBalanceScaleRight } from "react-icons/fa";

export default function Prerequisites() {
    return (
        <section className="py-16" style={{ backgroundColor: "#fafaff" }}>
            <div className="container mx-auto px-28">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#cf9b17", letterSpacing: "0.2em" }}>
                            ANTHÉOR PARIS
                        </span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-serif mb-4">
                        PRÉREQUIS
                    </h2>

                    {/* Decorative line with diamond */}
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-48 h-[1.5px]" style={{ backgroundColor: "#a994a4" }}></div>
                        <div className="w-1 h-1 rotate-45" style={{ backgroundColor: "#cf9b17" }}></div>
                        <div className="w-48 h-[1.5px]" style={{ backgroundColor: "#a994a4" }}></div>
                    </div>
                </div>
                {/* Prerequisites Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* ID Requirement */}
                    <div className="flex items-start bg-white shadow-sm">
                        <div className="flex-shrink-0 w-28 h-24 flex items-center justify-center" style={{ backgroundColor: "#cf9b17" }}>
                            <FaIdCard className="text-white text-4xl" />
                        </div>
                        <div className="w-full h-full p-6 flex justify-start items-center">
                            <p className="text-sm font-semibold font-body max-w-55 leading-6" style={{ color: "#362532" }}>
                                N'oubliez pas de vous munir d'une pièce d'identité.
                            </p>
                        </div>
                    </div>

                    {/* Weight Requirement */}
                    <div className="flex items-start bg-white shadow-sm">
                        <div className="flex-shrink-0 w-28 h-24 flex items-center justify-center" style={{ backgroundColor: "#cf9b17" }}>
                            <FaBalanceScaleRight className="text-white text-4xl" />
                        </div>
                        <div className="w-full h-full p-6 flex justify-start items-center">
                            <p className="text-sm font-semibold font-body max-w-80 leading-6" style={{ color: "#362532" }}>
                                La quantité minimale pour que nous rachetions votre or est de 10 grammes.
                            </p>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    );
}
