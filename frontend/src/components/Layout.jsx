import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./Footer";
import "./header/Header.css";

function Layout() {
  return (
    <div className="app-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
