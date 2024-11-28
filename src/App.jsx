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
import Teste from "./pages/teste";
import ResultsPage from "./pages/ResultsPage";
import PharmaPage from "./pages/PharmaPage";
import MagazinePage from "./pages/MagazinePage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import DetailDoctor from "./pages/DetailDoctor";

function App() {

  const a = 5;
  console.log(a);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="nos-doctors" element={<NosDoctors />} />
            <Route path="nos-doctors/:id" element={<DetailDoctor />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="teste" element={<Teste />} />
            <Route path="results" element={<ResultsPage />} />
            <Route path="pharma" element={<PharmaPage />} />
            <Route path="magazine" element={<MagazinePage />} />
            <Route path="/magazine/article/:id" element={<ArticleDetailPage />} />
            <Route path="*" element={<PageVide />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
