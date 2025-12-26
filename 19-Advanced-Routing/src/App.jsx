import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";

const App = () => {
  return (
    <div className="h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="/contact" element={<Contact />}>
          Contact
        </Route>

        {/* Nested Routing */}
        <Route path="/product" element={<Product />}>
          {/* This renders ONLY when the path is exactly "/product" */}
          <Route
            index
            element={<h1 className="hero">Product Page (Landing)</h1>}
          />

          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
        </Route>

        {/* 404 Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
