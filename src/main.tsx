import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage.tsx";
import SpringBootPage from "./components/pages/SpringBootPage.tsx";
import JavaPage from "./components/pages/JavaPage.tsx";
import ArticlePage from "./components/pages/ArticlePage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/spring-boot" element={<SpringBootPage />} />
          <Route path="/spring-boot/:id" element={<ArticlePage />} />
          <Route path="/java" element={<JavaPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
