import { Route, Routes } from "react-router-dom";
import ProductListPage from "./pages/product-list-page";

export function Router() {
  return (
    <Routes>
      <Route path="/products" element={<ProductListPage />} />
    </Routes>
  )
}