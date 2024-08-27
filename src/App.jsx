import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { NosDoctors } from "./pages/NosDoctors";
import { Services } from "./pages/Services";
import { PageVide } from "./pages/PageVide";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="nos-doctors" element={<NosDoctors />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<PageVide />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
