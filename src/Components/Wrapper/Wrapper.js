import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Root from "../Root/Root";
import Home from "../Root/Home/Home";
import Pagination from "../Pagination/Pagination";
const Wrapper = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Root />} />
          <Route index element={<Home />} />
          <Route />
        </Routes>
        <Pagination />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Wrapper;
