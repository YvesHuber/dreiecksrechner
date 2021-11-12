import { useState} from "react";
import Sketch from "react-p5";



export default function Dreieck() {


  const formuladata =[
    {Formula: "2 Winkel Kathete", id: 1},
    {Formula: "2 Winkel hypothenuse", id: 2},
    {Formula: "2 Kathete 1 Winkel", id: 3},
    {Formula: "1 Kathete 1 hypothenuse  1 Winkel", id: 4},
    ];
    const [Formulas, ] = useState(formuladata);
    const [formulaid, setformulaid] = useState(0);

    const [input1, setinput1] = useState(0);
    const [input2, setinput2] = useState(0);
    const [input3, setinput3] = useState(0);


    const [result, setresult] = useState(0);
    const [angleB, setangeB] = useState(0);
    const [resultangle, setresultangle] = useState(0);




    function calculate(){    


      if (formulaid === 1){

      }
      else if (formulaid === 2){

      }      
      else if (formulaid === 3 ){

      }      
      else if (formulaid === 4){

      }
      
    }





  return (
    <div className="App">
      <header className="App-header">
        <h1>What do you want to Calculate?</h1>
      <select onChange={ (e) => setformulaid(e.target.value)}>
          { 
  Formulas.map ( (object, i) => (<option key={i} name="formula" value={object.id} >{object.Formula}</option>))}
      </select>
      <p>Seite1</p>
      <input onChange={ (e) => setinput1(e.target.value)}/>
      <p>Seite2</p>
      <input onChange={ (e) => setinput2(e.target.value)}/>
      <p>Winkel A</p>
      <input onChange={ (e) => setinput3(e.target.value)}/>

      <button type="button" value="calculate" onClick={calculate}>calculate </button>
      <p>{result}</p>
      <p>{resultangle}</p>

      </header>
    </div>
  );
}
