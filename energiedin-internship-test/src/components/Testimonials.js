import Image from "next/image";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
    return (
        <section className="py-16" style={{ backgroundColor: "#fafaff" }}>
            <div className="container mx-auto px-28">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-sm font-semibold uppercase tracking-wider font-body mb-2 block" style={{ color: "#cf9b17", letterSpacing: "0.3em" }}>
                        ANTHÉOR PARIS
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold leading-tight font-serif mb-4" style={{ color: "#362532" }}>
                        Ils Parlent De Nous
                    </h2>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-40 h-[1.5px]" style={{ backgroundColor: "#a994a4" }}></div>
                        <div className="w-1 h-1 rotate-45" style={{ backgroundColor: "#cf9b17" }}></div>
                        <div className="w-40 h-[1.5px]" style={{ backgroundColor: "#a994a4" }}></div>
                    </div>
                </div>

                {/* slider */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <div className="flex justify-end gap-2">
                        <button className="w-8 h-8 bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors">
                            <FaChevronLeft className="text-sm" style={{ color: "#24101f" }} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center transition-colors" style={{ backgroundColor: "#24101f" }}>
                            <FaChevronRight className="text-sm" style={{ color: "#fafaff" }} />
                        </button>
                    </div>
                </div>
                {/* Testimonials Container */}
                <div>
                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                        {/* Testimonial 1 */}
                        <div className="flex gap-4 bg-white p-6">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-full overflow-hidden">
                                    <Image
                                        src="/profile/Miyah-Myles.jpg"
                                        alt="Miyah Myles"
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-base mb-2 font-body" style={{ color: "#cf9b17" }}>
                                    Miyah Myles
                                </h3>
                                <p className="text-gray-600 font-body text-xs leading-relaxed mb-4 text-justify">
                                    Lorem Ipsum is simply dummy text of the printing and etting industry. Lorem Ipsum has been the industry's standard my text ever since they 1500s, when an unknown printer.
                                </p>
                                <hr className="border-t border-gray-200 my-4" />
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-xs" style={{ color: "#e6aa12" }} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="flex gap-4 bg-white p-6">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-full overflow-hidden">
                                    <Image
                                        src="/profile/Olive-Mathews.jpg"
                                        alt="Olive Mathews"
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-base mb-2 font-body" style={{ color: "#cf9b17" }}>
                                    Olive Mathews
                                </h3>
                                <p className="text-gray-600 font-body text-xs leading-relaxed mb-4 text-justify">
                                    Lorem Ipsum is simply dummy text of the printing and etting industry. Lorem Ipsum has been the industry's standard my text ever since they 1500s, when an unknown printer.
                                </p>
                                <hr className="border-t border-gray-200 my-4" />
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-xs" style={{ color: "#e6aa12" }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Reviews Link */}
                    <div className="text-right mt-4">
                        <p
                            className="inline-flex items-center gap-2 text-xs font-body font-medium transition-colors"
                            style={{ color: "#4f5261" }}
                        >
                            Lire d'autres avis de nos clients
                            <div className="h-1 w-4 ml-4" style={{ backgroundColor: "#e6aa12" }}></div>
                            <a href="#" className="font-semibold" style={{ color: "#24101f" }}>SUR GOOGLE</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
