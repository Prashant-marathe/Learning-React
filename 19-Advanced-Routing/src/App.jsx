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
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Navbar2/>

      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>

        {/* Now, we want to make it so whenever someone searches the route courses/anything (literal anything) then we should go to CourseDetail page. This is a example of Dynamic Routing */}
        <Route path="/courses" element={<Courses />}>
          Route
        </Route>
        <Route path="/courses/:id" element={<CourseDetail/>}> Course Detail</Route>

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
