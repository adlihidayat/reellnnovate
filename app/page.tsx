import Contacts from "@/components/Contacts";
import Focus from "@/components/Focus";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Partner from "@/components/Partner";
import Portfolio from "@/components/Portfolio";
import ProductsAndServices from "@/components/ProductsAndServices";
import Step from "@/components/Step";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen w-full pb-10 capitalize">
      <Hero />
      <ProductsAndServices />
      <Focus />
      <Step />
      <Portfolio />
      <Partner />
      <Contacts />
      <Footer />
    </main>
  );
}
