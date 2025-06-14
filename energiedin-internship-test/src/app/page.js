import Header from "@/components/Header";
import Banner from "@/components/Banner";
import AboutUs from "@/components/AboutUs";
import Process from "@/components/Process";
import Prerequisites from "@/components/Prerequisites";
import Products from "@/components/Products";
import StoreLocation from "@/components/StoreLocation";
import Contact from "@/components/Contact";
import ContactForm from "@/components/ContactForm";
import CompanyInfo from "@/components/CompanyInfo";
import ContactServices from "@/components/ContactServices";
import ExperienceSection from "@/components/ExperienceSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="">
        <Banner />
        <AboutUs />
        <Process />
        <Prerequisites />
        <Products />
        <StoreLocation />
        <Contact />
        <ContactForm />
        <CompanyInfo />
        <ContactServices />
        <ExperienceSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
