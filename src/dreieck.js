import { useState } from "react";
import Canvas from "./Canvas";
import './App.css';


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

  const draw = (ctx, frameCount) => {
    ctx.beginPath();
    ctx.moveTo(100, 100);
    //10 points = 1cm
    ctx.lineTo(input1 * 10, 100);
    ctx.lineTo(10 - input3 / 3, input2 * 10);
    ctx.moveTo(input1 * 10, 100);
    ctx.lineTo(10- input3 / 3, input2 * 10);

    ctx.fill();
  };
  function calculate() {
    console.log(formulaid);

    var length;

    if (formulaid == 1) {
      // Seite 2 = hypothesis
      var angle = Math.round(Math.asin(input1 / input2) * 100);
      length = Math.sqrt(Math.pow(input2, 2) - Math.pow(input1, 2));

      console.log(angle);
      setbeta(angle);
      console.log(length);
      setresult(length);
      console.log(180 - beta - input3);
      setgamma(180 - beta - input3);
    } else if (formulaid == 2) {
      // Seite 2 = cathete

      length = Math.sqrt(Math.pow(input2, 2) + Math.pow(input1, 2));

      console.log(length);
      setresult(length);
      setbeta(90);
      setgamma(180 - input3 - beta);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>What do you want to Calculate?</h1>
        <select onChange={(e) => setformulaid(e.target.value)}>
          <option>Auswählen</option>
          {Formulas.map((object, i) => (
            <option key={i} name="formula" value={object.id}>
              {object.Formula}
            </option>
          ))}
        </select>
        <p>Seite 1</p>
        <input onChange={(e) => setinput1(e.target.value)} />
        <p>Seite 2</p>
        <input onChange={(e) => setinput2(e.target.value)} />
        <p>Winkel 1</p>
        <input onChange={(e) => setinput3(e.target.value)} />

        <button type="button" value="calculate" onClick={calculate}>
          calculate{" "}
        </button>

        <h2>Results</h2>
        <p>Seite 1: {input1}</p>
        <p>Seite 2: {input2}</p>
        <p>Seite 3: {result}</p>
        <p>Alpha: {input3}</p>
        <p>Beta: {beta}</p>
        <p>Gamma: {gamma}</p>

        <Canvas draw={draw}></Canvas>
      </header>
    </div>
  );
}
