import { Routes, Route } from "react-router-dom";

import DashboardPage from "../pages/DashboardPage";
import ProductsPage from "../pages/ProductsPage";
import CategoriesPage from "../pages/CategoriesPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
  );
}

export default AppRoutes;