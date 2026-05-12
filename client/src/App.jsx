import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import BestSellers from "./components/BestSellers";
import Footer from "./components/Footer";

import ProductDetails from "./pages/ProductDetails";
import AllProducts from "./pages/AllProducts";
import OfferBanner from "./components/OfferBanner";
import WhyChooseUs from "./components/WhyChooseUs";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Categories />
      <BestSellers />
      <OfferBanner />
      <WhyChooseUs />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/products" element={<AllProducts />} />

      <Route path="/product" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
