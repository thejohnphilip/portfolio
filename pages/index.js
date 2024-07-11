import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import Head from 'next/head';
import Intro from "@/components/Intro";
import About from "@/components/About";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(()=>{
    const observer= new IntersectionObserver((entries,opts)=>{
      entries.forEach(entry=>{
        entry.target.classList.toggle('visible',entry.isIntersecting);
      });
    });
    observer.observe(document.querySelector('div.skills-container'));
    document.querySelectorAll('section').forEach(elem=>
      {
        observer.observe(elem);
      });
  },[]);
  return (
    <main>
      <Header/>
      <Intro/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </main>
  )
}
 