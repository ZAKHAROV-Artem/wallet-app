import { Route, Routes } from "react-router";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import TransactionDetailsPage from "./pages/TransactionDetailsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<HomePage />} path="/" />
        <Route element={<TransactionDetailsPage />} path="transactions/:id" />
      </Route>
    </Routes>
  );
}
