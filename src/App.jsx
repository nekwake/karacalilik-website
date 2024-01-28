import "./App.css";
import { Layout } from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Hakkimizda } from "./pages/Hakkimizda";
import { Iletisim } from "./pages/Iletisim";
import { Etkinlikler } from "./pages/Etkinlikler";
import { Galeri } from "./pages/Galeri";
import { Sulaleler } from "./pages/Sulaleler";
import { EtkinlikDetay } from "./pages/EtkinlikDetay";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/sulaleler" element={<Sulaleler />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/etkinlikler" element={<Etkinlikler />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="/etkinlikler/:id" element={<EtkinlikDetay />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
