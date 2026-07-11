
import { Routes, Route } from "react-router-dom";

// Customer Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import BestSellers from "./components/BestSellers";
import OfferBanner from "./components/OfferBanner";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

// Customer Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import HelpSupport from "./pages/HelpSupport";
import TermsConditions from "./pages/TermsConditions";

import FloatingButtons from "./components/FloatingButtons";

import MyOrders from "./pages/MyOrders";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";

// Admin Routes
import AdminRoutes from "./admin/routes/AdminRoutes";

function HomePage() {
  return (
    <>
      <HeroSection />
      <Categories />
      <BestSellers />
      <OfferBanner />
      <WhyChooseUs />
    </>
  );
}

function CustomerLayout() {
  return (
    <>
      <Navbar />
      <FloatingButtons />

      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Products */}
        <Route path="/products" element={<AllProducts />} />

        {/* Product Details */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        {/* Checkout */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-orders"
          element={
            <ProtectedRoute>
              <MyOrders />
            </ProtectedRoute>
          }
        />

        {/* Order Success */}
        <Route path="/order-success" element={<OrderSuccess />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/reset-password" element={<ResetPassword />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/return-policy" element={<ReturnPolicy />} />

        <Route path="/help-support" element={<HelpSupport />} />

        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>

      <Footer />
    </>
  );
}



// function App() {
//   return (
//     <Routes>
//       {/* Customer Website */}
//       <Route path="/*" element={<CustomerLayout />} />

//       {/* Admin Dashboard */}
//       <Route path="/admin/*" element={<AdminRoutes />} />
//     </Routes>
//   );
// }

function App() {
  return (
    <Routes>
      {/* Customer Website */}
      <Route path="/*" element={<CustomerLayout />} />

      {/* Admin Dashboard */}
      <Route
        path="/admin/*"
        element={
          <AdminProtectedRoute>
            <AdminRoutes />
          </AdminProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;


