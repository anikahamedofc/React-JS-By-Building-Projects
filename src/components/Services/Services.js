import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "../../Images/service-one.jpg";
import Image1 from "../../Images/service-two.jpg";
import Image3 from "../../Images/service-three.jpg";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  return (
    <section className="services-area">
      <Container>
        <h2>My Services</h2>

        <Row>
          <Service
            image={Image}
            heading="Sporting Events Photography"
            price="Price: $300"
            text="I'm the leading sporting event photographer in Bangladesh. I offer quality images and products, on-site printing and great pricing!"
          />
          <Service
            image={Image1}
            heading="Live Match Photography"
            price="Price: $100"
            text="My live match photography is best in the world. The quality of the photos are just amazing and beautiful and ready to use for your next platform."
          />
          <Service
            image={Image3}
            heading="Team Picture Day Photography"
            price="Price: $150"
            text="I offers top quality posed team & individual photography services for any size team and league. You will get best team photos from me."
          />
        </Row>
      </Container>
    </section>
  );
};

export default Services;
