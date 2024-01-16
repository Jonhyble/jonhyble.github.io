import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Projects } from "./pages/Projects";
import { Home } from "./pages/Home";

const App = () => {
  const { i18n } = useTranslation();
  const lng = i18n.language;

  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Navigate to={`/${lng}/`} /> } />
          <Route path="/:lng/" element={<Home />} />
          <Route path="/:lng/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
