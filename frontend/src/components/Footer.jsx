import logoFooter from "../assets/logo-footer.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Logo Kasa" className="footer-logo" />
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
