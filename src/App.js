import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Row, Col, Container } from "react-bootstrap";
/* 

var colors = ['#ff0000', '#00ff00', '#0000ff'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('title').style.color = random_color; */

function App() {
  const [backgroundColor, setBackgroundColor] = useState();
    var bgColor= ["rgb(186, 116, 233)", "rgb(116, 128, 233)",
     "rgb(116, 233, 136)", "rgb(216, 233, 116)", "rgb(233, 178, 116)",
    "rgb(233, 116, 116)", "rgb(116, 206, 233)"];

  useEffect(() => {
    setBackgroundColor(bgColor[Math.floor(Math.random() * bgColor.length)]);
  }, [])

  return (
    <>
      <div className="App App-header" style={{backgroundColor:backgroundColor}}>
        <h1
          className="animate__animated animate__bounce"
          style={{ fontSize: "2em" }}
        >
          Telepathy
        </h1>
        {/* <Image width="180" height="170" src="logo512.png" roundedCircle />
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src="logo192.png" roundedCircle />
            </Col>
            <Col xs={6} md={4}>
              <Image src="logo192.png" roundedCircle />
            </Col>
            <Col xs={6} md={4}>
              <Image src="logo192.png" roundedCircle />
            </Col>
          </Row>
        </Container> */}
      </div>
      <div className="animate__animated animate__delay-2s animate__fadeIn">
        <h2
          style={{
            fontSize: "1.4em",
            fontWeight: "800",
            textAlign: "center",
            marginTop: "0.8em",
          }}
        >
          What's this?
        </h2>
        <p
          style={{
            fontSize: "1.1em",
            fontWeight: "500",
            textAlign: "center",
            marginTop: "0.5em",
            paddingLeft: "0.5em",
            paddingRight: "0.5em",
          }}
        >
          Just a bit of code to train your telepathic habilites with a friend :)
        </p>
      </div>
      <p
        className="animate__animated animate__delay-3s animate__fadeIn"
        style={{
          fontSize: "0.7em",
          fontWeight: "20",
          textAlign: "center",
          color: "gray",
        }}
      >
        blobquiet@gmail.com
      </p>
    </>
  );
}

export default App;
