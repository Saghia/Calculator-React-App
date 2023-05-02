import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../App.css";

const CalculatorBody = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const regex = /[^-()\d/*+%.]/g; // escludi tutti i caratteri tranne numeri, +, -, *, /, (, ), e .
    setValue(e.target.value.replace(regex, ""));
  };

  const handleOperation = () => {
    let numeriString = value.split(/[-+*/%]/); // array contenente le stringhe numeriche
    let operatori = value.match(/[-+*/%]/g); // array contenente gli operatori

    let numeriNumber = numeriString.map(Number); // Cast to Number
    let risultato = numeriNumber[0]; // inizializza il risultato al primo numero della lista

    for (let i = 0; i < operatori.length; i++) {
      let operatore = operatori[i];
      let numero = numeriNumber[i + 1];

      switch (operatore) {
        case "+":
          risultato += numero;
          break;
        case "-":
          risultato -= numero;
          break;
        case "*":
          risultato *= numero;
          break;
        case "/":
          risultato /= numero;
          break;
        case "%":
          risultato *= numero / 100;
          break;
        default:
          break;
      }
    }

    setValue(risultato); // output: 119
  };

  return (
    <div className="App">
      <Container>
        <Form.Control
          type="text"
          placeholder="Inserire Operazione"
          value={value}
          onChange={handleChange}
        />
        <div className="App-div">
          <Row>
            <Col xs={6}>
              <Button
                variant="danger"
                size="lg"
                type="button"
                color="secondary"
                onClick={() => setValue("")}
                className="btn btn-primary btn-square-md"
              >
                Delete
              </Button>
            </Col>

            <Col >
              <Button
                onClick={() => setValue((x) => x + "%")}
                variant="secondary"
                size="lg"
                type="button"
                color="secondary"
                className="btn btn-primary btn-square-md"
              >
                %
              </Button>
            </Col>

            <Col>
              <Button
                onClick={() => setValue((x) => x + "/")}
                variant="warning"
                size="lg"
                type="button"
                color="secondary"
                className="btn btn-primary btn-square-md"
              >
                /
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                onClick={() => setValue((x) => x + "7")}
                variant="secondary"
                size="lg"
                type="button"
                color="secondary"
                className="btn btn-primary btn-square-md"
              >
                7
              </Button>
            </Col>
            <Col>
              <Button
                onClick={() => setValue((x) => x + "8")}
                variant="secondary"
                size="lg"
                type="button"
                color="secondary"
                className="btn btn-primary btn-square-md"
              >
                8
              </Button>
            </Col>
            <Col>
              <Button
                onClick={() => setValue((x) => x + "9")}
                variant="secondary"
                size="lg"
                type="button"
                color="secondary"
                className="btn btn-primary btn-square-md"
              >
                9
              </Button>
            </Col>
            <Col>
              <Button
                onClick={() => setValue((x) => x + "*")}
                variant="warning"
                size="lg"
                type="button"
                color="secondary"
                className="btn btn-primary btn-square-md"
              >
                *
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                onClick={() => setValue((x) => x + "4")}
                variant="secondary"
                size="lg"
                type="button"
                color="secondary"
                className="btn btn-primary btn-square-md"
              >
                4
              </Button>
            </Col>
            <Col>
              <Button
                onClick={() => setValue((x) => x + "5")}
                variant="secondary"
                size="lg"
                type="button"
                color="secondary"
                className="btn btn-primary btn-square-md"
              >
                5
              </Button>
            </Col>
            <Col>
              <Button
                onClick={() => setValue((x) => x + "6")}
                variant="secondary"
                size="lg"
                type="button"
                color="secondary"
                className="btn btn-primary btn-square-md"
              >
                6
              </Button>
            </Col>
            <Col>
              <Button
                onClick={() => setValue((x) => x + "-")}
                variant="warning"
                size="lg"
                type="button"
                color="secondary"
                className="btn btn-primary btn-square-md"
              >
                -
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                onClick={() => setValue((x) => x + "1")}
                variant="secondary"
                size="lg"
                type="button"
                color="secondary"
                className="btn btn-primary btn-square-md"
              >
                1
              </Button>
            </Col>
            <Col>
              <Button
                onClick={() => setValue((x) => x + "2")}
                variant="secondary"
                size="lg"
                type="button"
                color="secondary"
                className="btn btn-primary btn-square-md"
              >
                2
              </Button>
            </Col>
            <Col>
              <Button
                onClick={() => setValue((x) => x + "3")}
                variant="secondary"
                size="lg"
                type="button"
                color="secondary"
                className="btn btn-primary btn-square-md"
              >
                3
              </Button>
            </Col>
            <Col>
              <Button
                onClick={() => setValue((x) => x + "+")}
                variant="warning"
                size="lg"
                type="button"
                color="secondary"
                className="btn btn-primary btn-square-md"
              >
                +
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Button
                onClick={() => setValue((x) => x + "0")}
                variant="secondary"
                size="lg"
                type="button"
                color="secondary"
                className="btn btn-primary btn-square-md"
              >
                0
              </Button>
            </Col>
            <Col>
              <Button
                onClick={() => setValue((x) => x + ".")}
                variant="secondary"
                size="lg"
                type="button"
                color="secondary"
                className="btn btn-primary btn-square-md"
              >
                .
              </Button>
            </Col>
            <Col>
              <Button
                onClick={handleOperation}
                variant="warning"
                size="lg"
                type="button"
                color="secondary"
                className="btn btn-primary btn-square-md"
              >
                =
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default CalculatorBody;
