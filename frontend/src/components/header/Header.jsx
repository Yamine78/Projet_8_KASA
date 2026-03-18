import { NavLink } from "react-router-dom";
import logoKasa from "../../assets/logo-kasa.png";
import "./Header.css"; 

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logoKasa} alt="Logo Kasa" />
      </div>

      <nav className="header-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => 
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => 
            isActive ? "nav-link active" : "nav-link"
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
