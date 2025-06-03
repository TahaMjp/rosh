import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Home from "../Root/Home/Home";
import Pagination from "../Pagination/Pagination";
import NotFound from "../NotFound/NotFound";
import Topic from "../Root/Topic/Topic";
import Search from "../Root/Search/Search";
import Random from "../Root/Random/Random";
import Settings from "../Root/Settings/Settings";
const Wrapper = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={[<Home />, <Pagination />]} />
          <Route path="/topic" element={[<Random />, <Pagination />]} />
          <Route path="/topic/:slug" element={[<Topic />, <Pagination />]} />
          <Route path="/random" element={[<Random />, <Pagination />]} />
          <Route path="/search" element={[<Search />, <Pagination />]} />
          <Route path="/search/:slug" element={[<Search />, <Pagination />]} />
          <Route path="/Settings" element={<Settings />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Wrapper;
