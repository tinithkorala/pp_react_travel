import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Header from "./../components/ui/Header";
import Footer from "./../components/ui/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <section className="overview">
        <Outlet />
      </section>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
