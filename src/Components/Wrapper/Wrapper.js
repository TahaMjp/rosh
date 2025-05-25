import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";

const Wrapper = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Container />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Wrapper;
