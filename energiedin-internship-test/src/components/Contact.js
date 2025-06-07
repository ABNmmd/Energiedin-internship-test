import { FaPaperPlane, FaCalendarCheck, FaComments } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="py-10" style={{ backgroundColor: "#fafaff" }}>
            <div className="container mx-auto px-28">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-sm font-semibold uppercase tracking-wider font-body" style={{ color: "#cf9b17", letterSpacing: "0.2em" }}>
                            ANTHÉOR PARIS
                        </span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold leading-tight font-serif mb-4" style={{ color: "#362532" }}>
                        CONTACTEZ-NOUS
                    </h2>

                    {/* Decorative line with diamond */}
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-40 h-[1.5px]" style={{ backgroundColor: "#a994a4" }}></div>
                        <div className="w-1 h-1 rotate-45" style={{ backgroundColor: "#cf9b17" }}></div>
                        <div className="w-40 h-[1.5px]" style={{ backgroundColor: "#a994a4" }}></div>
                    </div>
                </div>                {/* Content Section */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-3xl">
                        {/* Left Column - Phone Section */}
                        <div
                            className="bg-white p-4 shadow-sm rounded-sm flex flex-col items-center text-center relative overflow-hidden w-72"
                            style={{
                                backgroundColor: "#362532",
                                backgroundImage: "url('/img/L1.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat"
                            }}
                        >
                            <h3 className="text-lg font-semibold mb-1 font-body" style={{ color: "#e5d9e2" }}>TÉLÉPHONE</h3>
                            <div className="w-10 h-[1px] mb-2" style={{ backgroundColor: "#cf9b17" }}></div>
                            <div className="text-xl font-bold text-white mb-2 font-body">01 42 89 53 18</div>
                            <div className="flex items-center gap-1 text-white font-body text-xs">
                                <span>Être rappelé</span>
                                <span className="font-bold" style={{ color: "#cf9b17" }}>→</span>
                            </div>
                        </div>

                        {/* Right Column - Contact Options */}
                        <div className="space-y-2 w-72">
                            {/* Contact Form Button */}
                            <div className="flex items-center bg-white shadow-sm overflow-hidden rounded-r-md">
                                <div className="flex items-center justify-center w-16 h-10 rounded-tl-md rounded-bl-md" style={{ backgroundColor: "#cf9b17" }}>
                                    <FaPaperPlane className="text-white text-sm" />
                                </div>
                                <div className="flex-1 px-3 py-2 text-center" style={{ backgroundColor: "#362532" }}>
                                    <span className="text-white font-semibold font-body text-xs">FORMULAIRE DE CONTACT</span>
                                </div>
                            </div>

                            {/* Appointment Button */}
                            <div className="flex items-center bg-white shadow-sm overflow-hidden rounded-r-md">
                                <div className="flex items-center justify-center w-16 h-10 rounded-tl-md rounded-bl-md" style={{ backgroundColor: "#cf9b17" }}>
                                    <FaCalendarCheck className="text-white text-sm" />
                                </div>
                                <div className="flex-1 px-3 py-2 text-center" style={{ backgroundColor: "#362532" }}>
                                    <span className="text-white font-semibold font-body text-xs">PRENDRE RENDEZ-VOUS</span>
                                </div>
                            </div>

                            {/* Live Chat Button */}
                            <div className="flex items-center bg-white shadow-sm overflow-hidden rounded-r-md">
                                <div className="flex items-center justify-center w-16 h-10 rounded-tl-md rounded-bl-md" style={{ backgroundColor: "#cf9b17" }}>
                                    <FaComments className="text-white text-sm" />
                                </div>
                                <div className="flex-1 px-3 py-2 text-center" style={{ backgroundColor: "#362532" }}>
                                    <span className="text-white font-semibold font-body text-xs">CHAT EN LIGNE EN DIRECT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
