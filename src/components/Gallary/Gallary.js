import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Somemoment from "../Somemoment/Somemoment";
import gallaryPic from "../../Images/gallery-one.jpg";
import gallaryPic1 from "../../Images/gallery-two.jpg";
import gallaryPic2 from "../../Images/gallery-three.jpg";
import gallaryPic3 from "../../Images/gallery-four.jpg";
import gallaryPic4 from "../../Images/gallery-five.jpg";
import gallaryPic7 from "../../Images/gallery-seven.jpg";
import gallaryPic5 from "../../Images/gallery-nine.jpg";
import gallaryPic6 from "../../Images/gallery-ten.jpg";
import "./Gallary.css";

const Gallary = () => {
  return (
    <section className="services-area">
      <Container>
        <h2>Some Moments</h2>

        <Row>
          <Somemoment image={gallaryPic} />
          <Somemoment image={gallaryPic1} />
          <Somemoment image={gallaryPic2} />
          <Somemoment image={gallaryPic3} />
          <Somemoment image={gallaryPic4} />
          <Somemoment image={gallaryPic7} />
          <Somemoment image={gallaryPic5} />
          <Somemoment image={gallaryPic6} />
        </Row>
      </Container>
    </section>
  );
};

export default Gallary;
