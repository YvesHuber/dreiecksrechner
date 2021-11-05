import {useEffect, useState} from "react";
import * as THREE from 'three';
import Sketch from "react-p5";



function Dreieck() {


  const setup = (p5, canvasParentRef) => {
		p5.createCanvas(500, 500).parent(canvasParentRef);
	};
  const draw = (p5) => {
		p5.background(0);
		p5.triangle(input1, input2, result, 90,30, 60);
	};

  const formuladata =[
    {Value: "c", Formula: "√ A^2 + B^2", id: 1},
    {Value: "a", Formula: "√ C^2 - B^2", id: 2},
    {Value: "alpha", Formula: "180 - gamma - beta", id: 3},
    {Value: "gamma", Formula: "180 - alpha - beta", id: 4},
    {Value: "height", Formula: "2 * a / b", id: 3},
    ];
    const [Formulas, setFormulas] = useState(formuladata);
    const [formulaid, setformulaid] = useState(0);

    const [input1, setinput1] = useState(0);
    const [input2, setinput2] = useState(0);
    const [result, setresult] = useState(0);




    function calculate(){      
      if (formulaid == 1){
        //calculate hypothenuse
        setresult(Math.sqrt( Math.pow(input1, 2) + Math.pow(input2,2)));
        console.log(result + " result");
      }
      else if (formulaid == 2){
        //calculate the kathete
        setresult(Math.sqrt( Math.pow(input1, 2) - Math.pow(input2,2)));
        console.log(result + " result");
      }      
      else if (formulaid == 3 || formulaid == 4){
        //calculate angle
        setresult(180 - input1 - input2);
        console.log(result + " result");
      }      
      else if (formulaid == 5){
        //calculate hypothenuse
        setresult( 2 * input1 / input2);
      }
    }





  return (
    <div className="App">
      <header className="App-header">
        <h1>What do you want to Calculate?</h1>
      <select onChange={ (e) => setformulaid(e.target.value)}>
          { 
  Formulas.map ( (object, i) => (<option key={i} name="formula" value={object.id} >{object.Value}</option>))}
      </select>

      <input onChange={ (e) => setinput1(e.target.value)}/>
      <input onChange={ (e) => setinput2(e.target.value)}/>
      <button type="button" value="calculate" onClick={calculate}>calculate </button>
      <p>{result}</p>

      <Sketch setup={setup} draw={draw} />
      </header>
    </div>
  );
}
export default Dreieck;
