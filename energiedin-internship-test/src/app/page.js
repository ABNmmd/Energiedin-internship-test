import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="">
        <Banner />
      </main>
    </div>
  );
}
