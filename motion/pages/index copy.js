import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google"; 
const inter = Inter({ subsets: ["latin"] });
import Contact from "@/components/contact/Contact";
import Cursor from "@/components/cursor/Cursor";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Parallax from "@/components/parallax/Parallax";
import Portfolio from "@/components/portfolio/Portfolio";
import Services from "@/components/services/Services";
import MouseFollow from '../components/parallax/mouse'; 
export default function Home() {
  return (
    <div>
    <MouseFollow />
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
}
