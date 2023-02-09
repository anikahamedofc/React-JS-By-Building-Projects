import Carousel from "react-bootstrap/Carousel";
import Banner1 from "../../Images/Banner1.jpg";
import Banner2 from "../../Images/Banner2.jpg";
import Banner3 from "../../Images/Banner3.jpg";
import "./Banner.css";

const Carousels = () => {
  return (
    <section className="slider carousel slide carousel-fade">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>Spotographer</h3>
            <h2>Sports Photographer</h2>
            <p>I Capture Sports Moments and Actions.</p>
            <a className="about-buton" href="/about">
              More About Me
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Spotographer</h3>
            <h2>Sports Photographer</h2>
            <p>I Capture Sports Moments and Actions.</p>
            <a className="about-buton" href="/about">
              More About Me
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Spotographer</h3>
            <h2>Sports Photographer</h2>
            <p>I Capture Sports Moments and Actions.</p>
            <a className="about-buton" href="/about">
              More About Me
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Carousels;
