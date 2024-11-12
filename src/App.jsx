import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { NosDoctors } from "./pages/NosDoctors";
import { Services } from "./pages/Services";
import { PageVide } from "./pages/PageVide";
import Layout from "./components/Layout";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="nos-doctors" element={<NosDoctors />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="results" element={<ResultsPage />} />
            <Route path="*" element={<PageVide />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
