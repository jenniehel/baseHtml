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

export default function Home() {
  return (
    <div> 
      <Navbar />
    </div>
  );
}
