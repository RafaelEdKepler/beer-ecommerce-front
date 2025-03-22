import { Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/product-list-page";
import ProductDetailsPage from "./pages/product-details-page";

export function Router() {
  return (
    <Routes>
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
    </Routes>
  )
}