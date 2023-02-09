import Col from "react-bootstrap/Col";
import "./Somemoment.css";

const Somemoment = (props) => {
  return (
    <Col lg={3}>
      <div className="single-image">
        <img className="w-100" src={props.image} alt="images" />
      </div>
    </Col>
  );
};

export default Somemoment;
