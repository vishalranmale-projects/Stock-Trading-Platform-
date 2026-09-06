import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../landing_page/home/Home.jsx";
import Signup from "../landing_page/signup/Signup.jsx";
import Signin from "../landing_page/Signin/Signin.jsx";
import About from "../landing_page/about/AboutPage.jsx";
import Pricing from "../landing_page/pricing/PricingPage.jsx";
import Products from "../landing_page/products/Hero.jsx";
import Support from "../landing_page/support/SupportPage.jsx";
import Navbar from "../landing_page/Navbar.jsx";
import Footer from "../landing_page/Footer.jsx";
import Notfound from "../landing_page/NotFound.jsx";
import Productpage from "../landing_page/products/Productpage.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar></Navbar>
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signup" element={<Signin></Signin>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/products" element={<Productpage />}></Route>
        <Route path="/support" element={<Support></Support>}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </div>
    <Footer></Footer>
  </BrowserRouter>,
);
