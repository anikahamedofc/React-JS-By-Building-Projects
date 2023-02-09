import Container from "react-bootstrap/Container";
import Logo from "../../Images/logo.png";

const Footer = () => {
  return (
    <footer className="footer bg-dark py-5 text-center">
      <Container>
        <img src={Logo} alt="logo" />
        <p class="text-white text-center mt-3 mb-0">
          © 2022 Spotographer, All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
