import { useState } from "react";
import Canvas from "./Canvas";
import "./App.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dreieck() {
  const formuladata = [
    { Formula: "Lösung 1 Seite 2 = Hypothenuse", id: 1 },
    { Formula: "Lösung 2 Seite 2 = Katethe", id: 2 },
  ];
  const [Formulas] = useState(formuladata);
  const [formulaid, setformulaid] = useState(0);
  const [input1, setinput1] = useState(0);
  const [input2, setinput2] = useState(0);
  const [input3, setinput3] = useState(0);
  const [result, setresult] = useState(0);
  const [beta, setbeta] = useState(0);
  const [gamma, setgamma] = useState(0);
  let draw = (ctx, frameCount) => {};

  function calculate() {
    draw = (ctx, frameCount) => {
      ctx.beginPath();
      ctx.moveTo(100, 100);
      //10 points = 1cm
      ctx.lineTo(input1 * 10, 100);
      ctx.lineTo(10 - input3 / 3, input2 * 10);
      ctx.moveTo(input1 * 10, 100);
      ctx.lineTo(10 - input3 / 3, input2 * 10);

      ctx.fill();
    };
    var length;
    if (formulaid == 1) {
      // Seite 2 = hypothesis
      var angle = Math.round(Math.asin(input1 / input2) * 100);
      length = Math.round(Math.sqrt(Math.pow(input2, 2) - Math.pow(input1, 2)));

      console.log(angle);
      setbeta(angle);
      console.log(length);
      setresult(length);
      console.log(180 - beta - input3);
      setgamma(180 - beta - input3);
    } else if (formulaid == 2) {
      // Seite 2 = cathete

      length = Math.round(Math.sqrt(Math.pow(input2, 2) + Math.pow(input1, 2)));

      console.log(length);
      setresult(length);
      setbeta(90);
      setgamma(180 - input3 - beta);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col md="1">
              <h1>What do you want to Calculate?</h1>
            </Col>
          </Row>

          <Row>
            <Col md="1">
              <select onChange={(e) => setformulaid(e.target.value)}>
                <option>Auswählen</option>
                {Formulas.map((object, i) => (
                  <option key={i} name="formula" value={object.id}>
                    {object.Formula}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          <Row>
            <Col md="1">
              <p>Seite1</p>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <InputGroup className="mb-3">
                <FormControl onChange={(e) => setinput1(e.target.value)} />
                <InputGroup.Text id="basic-addon1">cm</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md="1">
              <p>Seite2</p>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <InputGroup className="mb-3">
                <FormControl onChange={(e) => setinput2(e.target.value)} />
                <InputGroup.Text id="basic-addon1">cm</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md="1">
              <p>Winkel1</p>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <InputGroup className="mb-3">
                <FormControl onChange={(e) => setinput3(e.target.value)} />
                <InputGroup.Text id="basic-addon1">Grad</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md="1">
              <Button variant="light" onClick={calculate}>
                Calculate
              </Button>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col md="4">
              <ListGroup>
                <ListGroup.Item action variant="light">
                  {" "}
                  Resultate
                </ListGroup.Item>
                <ListGroup.Item action variant="light">
                  Seite 1: {input1}
                </ListGroup.Item>
                <ListGroup.Item action variant="light">
                  Seite 2: {input2}
                </ListGroup.Item>
                <ListGroup.Item action variant="light">
                  Seite 3: {result}
                </ListGroup.Item>
                <ListGroup.Item action variant="light">
                  Alpha: {input3}
                </ListGroup.Item>
                <ListGroup.Item action variant="light">
                  Beta: {beta}
                </ListGroup.Item>
                <ListGroup.Item action variant="light">
                  Gamma: {gamma}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>

          <Canvas draw={draw}></Canvas>
        </Container>
      </header>
    </div>
  );
}
