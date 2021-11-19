import { useState} from "react";
import Sketch from "react-p5";



export default function Dreieck() {


  const formuladata =[
    {Formula: "Lösung 1", id: 1},
    {Formula: "Lösung 2", id: 2},
    ];
    const [Formulas, ] = useState(formuladata);
    const [formulaid, setformulaid] = useState(0);

    const [input1, setinput1] = useState(0);
    const [input2, setinput2] = useState(0);
    const [input3, setinput3] = useState(0);


    const [result, setresult] = useState(0);
    const [beta, setbeta] = useState(0);
    const [gamma, setgamma] = useState(0);



    function draw() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext"2d"){
        var ctx = canvas.getContext("2d");
      }
      
    }


    function calculate(){    
      console.log(formulaid);


      if (formulaid == 1){

        // Seite 2 = hypothesis

        console.log(Math.asin(input1 / input2))
        setbeta(Math.round(Math.asin(input1 / input2) * 100))
        console.log(Math.sqrt(Math.pow(input2, 2) - Math.pow(input1, 2)))
        setresult(Math.sqrt(Math.pow(input2, 2) - Math.pow(input1, 2)))
        console.log(180-beta-input3)
        setgamma(180-beta-input3)

      }
      else if (formulaid == 2){

        // Seite 2 = cathete

        console.log(Math.sqrt(Math.pow(input1, 2) + Math.pow(input2,2)))
        setresult(Math.sqrt(Math.pow(input1, 2) + Math.pow(input2,2)))
        setbeta(90)
        setgamma(180-input3-beta)


      }      
      
    }

    draw();






  return (
    <div className="App">
      <header className="App-header">
        <h1>What do you want to Calculate?</h1>
      <select onChange={ (e) => setformulaid(e.target.value)}>
        <option>Auswählen</option>
          { 
  Formulas.map ( (object, i) => (<option key={i} name="formula" value={object.id} >{object.Formula}</option>))}
      </select>
      <p>Seite 1</p>
      <input onChange={ (e) => setinput1(e.target.value)}/>
      <p>Seite 2</p>
      <input onChange={ (e) => setinput2(e.target.value)}/>      
      <p>Winkel 1</p>
      <input onChange={ (e) => setinput3(e.target.value)}/>

      <button type="button" value="calculate" onClick={calculate}>calculate </button>
      <p>Seite 3: {result}</p>
      <p>Winkel b : {beta}</p>
      <p>Winkel c : {gamma}</p>

      <canvas id="canvas" width="500" height="500"></canvas>

      </header>
    </div>
  );
}
