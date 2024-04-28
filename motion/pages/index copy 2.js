import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Contact from "@/components/contact/Contact";
import Cursor from "@/components/cursor/Cursor";
import Hero from "@/components/hero/Hero";
import Parallax from "@/components/parallax/Parallax";
import Portfolio from "@/components/portfolio/Portfolio";
import Services from "@/components/services/Services";
import Navbar from "@/components/navbar/Navbar";
import MouseFollow from '../components/parallax/mouse';
export default function Home() {
 
  
  return (
    <div> 
    <MouseFollow/>
      <section>
      <Navbar />
      <Hero/>
      </section>
      <section id="Services">
      <Parallax type="services" />
    </section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
  );
}
