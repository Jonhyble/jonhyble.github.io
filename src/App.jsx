import { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Projects } from "./pages/Projects";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
