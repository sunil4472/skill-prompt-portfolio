import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/about";
import Skill from "./pages/skill";
import Contact from "./pages/contact";
import HomePage from "./pages/Home";
import Footer from "./components/Footer";
import ColorSwitcher from "./pages/color";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <HomePage />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/skill",
    element: (
      <>
        <Navbar />
        <Skill />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Navbar />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/color",
    element: (
      <>
        <Navbar />
        <ColorSwitcher />
        <Footer />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
