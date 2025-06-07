import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function CompanyInfo() {
  return (
    <section className="py-16" style={{ backgroundColor: "#fafaff" }}>
      <div className="container mx-auto px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Store Image */}
          <div className="space-y-6">
            <div className="bg-white shadow-sm">
              <Image
                src="/img/img.jpg"
                alt="Magasin Antheor Paris"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column - Company Info */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider font-body" style={{ color: "#cf9b17", letterSpacing: "0.2em" }}>
                  ANTHÉOR PARIS
                </span>
              </div>
              
              <h2 className="text-xl lg:text-2xl font-extrabold font-serif mb-6" style={{ color: "#362532" }}>
                Antheor Paris, un comptoir spécialisé à votre service
              </h2>
              
              <div className="space-y-4 text-sm font-body leading-6" style={{ color: "#4f5261" }}>
                <p className="font-medium">
                  Depuis plus d'une vingtaine d'annees d'existence, Antheor Paris s'est spécialisé dans le rachat de metaux precieux a Paris tels que l'Or, le Platine ou l'Argent, sous toutes leurs formes, qu'ils soient en lingots, en bijoux ou encore en pièces de monnaie. Mais encore, le comptoir peut egalement vous racheter vos objets d'antiquité de valeur.
                </p>
                
                <p>
                  Si vous avez investi dans des bijoux précieux et autres objets antiques pour protéger et diversifier vos épargnes, les revendre constitue également un meilleur moyen d'obtenir rapidement des liquidités. Antheor Paris vous fait bénéficier des meilleurs coûts du marché, vous pouvez vendre à partir d'un gramme, et proposez vos propres prix selon vos besoins et vos envies. Avec Antheor Paris, vous serez payé au comptant, aux meilleurs prix.
                </p>
                
                <p>
                  Antheor Paris est l'un des acteurs incontournables du marché des métaux précieux à Paris. Nombreux sont ceux qui nous ont déjà fait confiance, nous avons déjà pu satisfaire différents vendeurs avec des cours extrêmement compétitifs.
                </p>
              </div>
            </div>
          </div>
        </div>          
        {/* Quote Section */}
        <div className="mt-8 flex">
          <div className="w-3 mr-1.5" style={{ backgroundColor: "#cf9b17" }}></div>
          <div className=" p-8" style={{ backgroundColor: "#cf9b17" }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-opacity-20 rounded-full border-1 border-white flex items-center justify-center flex-shrink-0">
                <FaQuoteLeft className="text-white text-sm" />
              </div>
              <div>
                <p className="text-white font-body text-base font-semibold mb-2">
                  RACHAT DE BIJOUX: SÉCURITÉ ET CONFIDENTIALITÉ SONT DE MISES
                </p>
                <p className="text-white font-body leading-6 text-sm">
                  La discrétion fait aussi partie des maîtres mots chez Antheor Paris lorsqu'il s'agit des transactions réalisées, néanmoins dans la limite de ce que permet la loi. En effet, la réglementation par rapport au rachat de vieil Or et bijoux nécessite de relever l'identité du vendeur. Si vous voulez nous revendre des métaux précieux ou encore des objets d'antiquité, vous pouvez vous rendre dans nos locaux munis d'une pièce d'identité, nous vous accueillerons en toute confidentialité dans un cadre bien sécurisé à Paris. N'hésitez pas également à nous contacter pour un déplacement sur rendez-vous.
                </p>
              </div>
            </div>
          </div>
        </div>        
        {/* Services Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Service */}
          <div className="bg-white p-6 pr-10">
            <div className="flex items-start gap-4 text-justify">
              <div className="flex items-center justify-center flex-shrink-0">
                <FaQuoteLeft className="text-3xl" style={{ color: "#f5f5f7" }} />
              </div>
              <div>
                <h3 className="text-base font-bold mb-4 font-sans" style={{ color: "#cf9b17" }}>
                  UNE ÉQUIPE DE PROFESSIONNELS QUALIFIÉS VOUS ACCUEILLE
                </h3>
                <p className="text-gray-700 font-body leading-loose text-sm">
                  En venant dans nos locaux ou bien en nous contactant à travers le site, une équipe de professionnels qualifiés vous accueillera, le personnel agira avec honnêteté et un sens aigu des responsabilités. Tout au longs de ses années d'existence, Antheor Paris a su inscrire un esprit de partenariat à long terme, équitable et équilibré dans les relations qu'elle entretient avec sa clientèle.
                </p>
              </div>
            </div>
          </div>

          {/* Right Service */}
          <div className="bg-white p-6 pr-10">
            <div className="flex items-start gap-4 text-justify">
              <div className="flex items-center justify-center flex-shrink-0">
                <FaQuoteLeft className="text-3xl" style={{ color: "#f5f5f7" }} />
              </div>
              <div>
                <h3 className="text-base font-bold mb-4 font-sans" style={{ color: "#cf9b17" }}>
                  RACHAT OR ET ARGENT : NOUS VOUS ACHETONS VOS BIENS AUX MEILLEURS PRIX
                </h3>
                <p className="text-gray-700 font-body leading-loose text-sm">
                  Avec Antheor Paris, vous obtenez toujours les meilleurs prix possible pour la vente de vos métaux précieux et de vos pièces d'antiquité. Grâce à des conseils pertinents et à un excellent service venant d'une équipe qui agit avec fiabilité et justesse sur les prix de rachat, nous avons pu atteindre un haut degré de fidélité de la part de notre clientèle à Paris, et bien au-delà.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Quote Section */}
        <div className="mt-12 flex">
          <div className="w-3 mr-1.5" style={{ backgroundColor: "#cf9b17" }}></div>
          <div className=" p-8" style={{ backgroundColor: "#cf9b17" }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-opacity-20 rounded-full border-1 border-white flex items-center justify-center flex-shrink-0">
                <FaQuoteLeft className="text-white text-sm" />
              </div>
              <div>
                <p className="text-white font-body text-base font-semibold mb-2">
                  RACHAT OR ET ARGENT : UNE TRANSACTION TRANSPARENTE ET ÉQUITABLE
                </p>
                <p className="text-white font-body leading-6 text-sm">
                  Nous avons mis au point des experts spécialisés sur la transparence, en faveur la balance sur les méthodes d'estimation et en offrant à nos chers clients un avis prix basés sur les cours officiels. En effet nous chaque les espaces de la transaction, grâce téléament. Nous nous engageons ainsi à répondre à toutes les questions que vous avez au moment de précision spécialement, savoir les nombreuses et situations lors des transactions et autres.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Jewelry Image */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Left Column - Jewelry Image */}
          <div className="h-full w-full">
            <Image
              src="/img/img1.jpg"
              alt="Bijoux précieux"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>          
          {/* Right Column - Legal Info */}
          <div className="bg-white p-6 px-8 shadow-sm">
            <div className="">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider font-body" style={{ color: "#cf9b17", letterSpacing: "0.2em" }}>
                  ANTHÉOR PARIS
                </span>
              </div>
              
              <h2 className="text-xl lg:text-2xl font-extrabold font-serif mb-6" style={{ color: "#362532" }}>
                Vendez vos bijoux et objets précieux dans un cadre légal
              </h2>
              
              <div className="space-y-4 text-sm font-body leading-6" style={{ color: "#4f5261" }}>
                <p className="font-medium">
                  Antheor Paris est fort respectueux de la loi Hamon de 2014 en ce qui concerne la législation sur les rachats d'Or et d'objets, visant à protéger les vendeurs qui cedent leurs biens contre de l'argent
                </p>
                
                <p>
                  Un contrat de prévente est établi selon les règles pour toutes opérations sur l'Or. Les prix d'achat de l'Or sont communiqués et affiches de maniere visible, autant sur notre site que dans nos locaux.
                </p>
                
                <p>
                  Lorsque vous nous vendez de l'Or, vous avez également droit au délai de rétractation de deux jours. Si vous souhaitez récupérer votre bien dans les 48 heures, vous ne subirez aucune pénalité. Vous devez tout simplement nous reverser le prix auquel nous vous avons achete votre bien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
