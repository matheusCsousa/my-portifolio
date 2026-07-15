import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1 w-full page-enter" key={location.pathname}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
