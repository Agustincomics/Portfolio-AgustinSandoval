import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt, FaYoutube, FaTwitter, FaLocationArrow, FaLinkedin } from 'react-icons/fa';
import '../../App.css';

const Footer = () => {

  const urlGoogle = "https://www.google.com/maps/search/?api=1&query=General+Paz+576%2C+T4000+San+Miguel+de+Tucumán%2C+Tucumán";

  return (
    <footer className="bg-dark text-light py-4 mainSection">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Agustin Sandoval</h5>
            <ul className="list-unstyled">
              
            </ul>
          </Col>
          <Col md={3}>
            <h5>Servicio al Cliente</h5>
            <ul className="list-unstyled">
              
            </ul>
          </Col>
          <Col md={3}>
            <h5>Mi Cuenta</h5>
            <ul className="list-unstyled">

            </ul>
          </Col>
          <Col md={3}>
            <h5>Contactenos</h5>
            <ul className="list-unstyled">
              <div className="d-flex align-items-center pb-2">
                <li className="me-3">
                    <FaFacebook className="footer-icon" />
                    <a href="https://wa.me/543815970428" target="_blank" rel="noopener noreferrer" className="footer-text">3815970428</a>
                </li>
                <li className="me-3">
                    <FaTwitter className="footer-icon" />
                    <a href="https://wa.me/543815970428" target="_blank" rel="noopener noreferrer" className="footer-text">3815970428</a>
                </li>
                <li className="me-3">
                    <FaInstagram className="footer-icon" />
                    <a href="https://wa.me/543815970428" target="_blank" rel="noopener noreferrer" className="footer-text">3815970428</a>
                </li>
                <li className="me-3">
                    <FaYoutube className="footer-icon" />
                    <a href="https://wa.me/543815970428" target="_blank" rel="noopener noreferrer" className="footer-text">3815970428</a>
                </li>
                <li className="me-3">
                    <FaLinkedin className="footer-icon" />
                    <a href="https://wa.me/543815970428" target="_blank" rel="noopener noreferrer" className="footer-text">3815970428</a>
                </li>
              </div>
              <li className="pt-2">
                <FaPhoneAlt className="footer-icon" />
                <a href="https://wa.me/543815970428" target="_blank" rel="noopener noreferrer" className="footer-text">3815970428</a>
              </li>
              <li className="my-3">
                <FaEnvelope className="footer-icon" />
                <a href="https://wa.me/543815970428" target="_blank" rel="noopener noreferrer" className="footer-text">3815970428</a>
              </li>
              <li>
                <FaLocationArrow className="footer-icon" />
                <a href={urlGoogle} target="_blank" rel="noopener noreferrer" className="footer-text footer-link">General Paz 576, T4000 San Miguel de Tucumán, Tucumán</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bg-dark text-light text-center py-3">
        <p>&copy; Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;