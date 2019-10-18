import React from "react";
import { ButtonGroup, Button, Col, Row, Container } from "react-bootstrap";
import { connect } from "react-redux";

const Counter = props => {
  const incHandler = () => props.dispatch({ type: "INCREMENT" });
  const decHandler = () => props.dispatch({ type: "DECREMENT" });
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12}>{props.count}</Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12}>
          <ButtonGroup className="mr-2" aria-label="Second group">
            <Button onClick={() => decHandler()}> - </Button>
            <Button onClick={() => incHandler()}> + </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ count }) => ({ count });

export default connect(mapStateToProps)(Counter);
