import LandingPage from "../LandingPage/LandingPage";
import Category from "../CategoryOfProducts/Category";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Contact from "../ContactUs/ContactUs";
import CartPage from "../CartPage/CartPage";
import Wishlist from "../Wishlist/Wishlist";
import DeliveryOptions from "../DeliveryOptions/DeliveryOptions";
import ProductDescriptionPage from "../ProductDescriptionPage/ProductDescriptionPage";
import CategoryPage from "../CategoryPage/CategoryPage";
import TrendingProducts from "../TrendingProducts/TrendingProducts";
import ConatctDetails from "../ConatctDetails/ConatctDetails";
import PaymentPage from "../PaymentPage/PaymentPage";
import SuccessfulMsg from "../successful/successful";
import BannerPage from "../Banner/Banner";

export default function Routerss() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <Category />
              <BannerPage />
              <TrendingProducts />
              <DeliveryOptions />
            </>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/contact_us" element={<Contact />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/earings/:id" element={<ProductDescriptionPage />} />

        <Route path="/bracelets/:id" element={<ProductDescriptionPage />} />

        <Route path="/chains/:id" element={<ProductDescriptionPage />} />

        <Route path="/rings/:id" element={<ProductDescriptionPage />} />

        <Route path="/category/:id/products" element={<CategoryPage />} />

        <Route path="/contact" element={<ConatctDetails />} />

        <Route path="/payment" element={<PaymentPage />} />

        <Route path="/successful" element={<SuccessfulMsg />} />
      </Routes>
    </div>
  );
}
