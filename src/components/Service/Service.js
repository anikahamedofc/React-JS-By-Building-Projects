import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Service.css";

const Service = (props) => {
  return (
    <Col lg={4}>
      <div className="single-image">
        <img className="w-100" src={props.image} alt="images" />
      </div>
      <div className="single-service">
        <h3>{props.heading}</h3>
        <h5>Price: {props.price}</h5>
        <p>{props.text}</p>
        <Button className="btn btn-theme">Book Now</Button>
      </div>
    </Col>
  );
};

export default Service;
