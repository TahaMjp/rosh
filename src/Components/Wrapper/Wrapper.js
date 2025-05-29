import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Root from "../Root/Root";
import Home from "../Root/Home/Home";
import Pagination from "../Pagination/Pagination";
import NotFound from "../NotFound/NotFound";
const Wrapper = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route index element={[<Home />, <Pagination />]} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Wrapper;
