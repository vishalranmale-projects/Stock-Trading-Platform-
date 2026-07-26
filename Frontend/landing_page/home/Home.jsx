import React from "react";
import Awards from "./Awards.jsx";
import Education from "./Education.jsx";
import OpenAccount from "../OpenAccount.jsx";
import Hero from "./Hero.jsx";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import Stats from "./Stats.jsx";
import Pricing from "./Pricing.jsx";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Awards></Awards>
      <Stats></Stats>
      <Pricing></Pricing>
      <Education></Education>
      <OpenAccount></OpenAccount>
      <Footer></Footer>
    </>
  );
}
