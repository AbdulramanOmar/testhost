import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import LayoutAdmin from "./LayoutAdmin";
import Admin from "./pages/Admin";
import "./App.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Podcasts from "./pages/Podcasts";
import Programs from "./pages/Programs";
import { BrowserRouter } from "react-router-dom";
import Program from "./componet/Program/Program";
import AddProduct from "./componet/AddProduct/AddProduct";
import Update from "./componet/Update/Update";
import PodcastList from "./componet/PodcastList/PodcastList";
import AddPodcast from "./componet/AddPodcast/AddPodcast";
import UpdatePodcast from "./componet/Update/UpdatePodcast";
import PorgramDedails from "./componet/PorgramDedails/PorgramDedails";
import EmailSender from "./componet/EmailSender/EmailSender";
function App() {
  const { i18n } = useTranslation();
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.body.style.fontFamily =
      i18n.language === "ar" ? "Cairo" : "Poppins";
  }, [i18n.language]);
  return (
    <main
      style={
        i18n.language === "ar"
          ? { fontFamily: "Cairo" }
          : { fontFamily: "Poppins" }
      }
    >
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/programs/:id" element={<PorgramDedails />} />
          </Route>
          <Route path="/admin" element={<LayoutAdmin />}>
            <Route index element={<Admin />} />
            <Route path="/admin/programs" element={<Program />} />
            <Route path="/admin/addProgram" element={<AddProduct />} />
            <Route path="/admin/podcasts" element={<PodcastList />} />
            <Route path="/admin/addPodcast" element={<AddPodcast />} />
            <Route path="/admin/program/:id" element={<Update />} />
            <Route path="/admin/podcast/:id" element={<UpdatePodcast />} />
            <Route path="/admin/send" element={<EmailSender />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
