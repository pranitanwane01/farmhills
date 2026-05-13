import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import BestSellers from "./components/BestSellers";
import OfferBanner from "./components/OfferBanner";
import WhyChooseUs from "./components/WhyChooseUs";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function HomePage() {
  return (
    <>
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
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/products" element={<AllProducts />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
