import {useEffect, useState} from "react";

function Dreieck() {
  const formuladata =[
    {Value: "c", Formula: "√ A^2 + B^2", id: 0},
    {Value: "a", Formula: "√ C^2 - B^2", id: 1},
    {Value: "alpha", Formula: "180 - gamma - beta", id: 2},
    {Value: "gamma", Formula: "180- alpha - beta", id: 3},
    {Value: "height", Formula: "2 * a / b", id: 4},
    ];
    const [selectFormulas, setselectFormulas] = useState(formuladata);
    const [selectedFormula, setselectedFormula] = useState({Value: "", Formula: ""});

    const [alphaangle, setalphaangle] = useState(0);
    const [betaangle, setbetaangle] = useState(0);
    const [gammaangle, setgammaangle] = useState(0);

    const [alength, setalength] = useState(0);
    const [blength, setblength] = useState(0);
    const [clength, setclength] = useState(0);

    function calculate(){
      calculateangle();
      calculatelength();
      
    }

    function calculateangle(){
      let result;
      result = 180-alphaangle-betaangle;
        setgammaangle(result);
    }
    function calculatelength(){
      let result;
      result = Math.sqrt(Math.pow(alength,2) + Math.pow(blength,2));
      setclength(result);
    }



  return (
    <div className="App">
      <header className="App-header">
      <h3>What do you want to calculate</h3>
          { selectFormulas.map ( (object, i) => (<a> {object.Value} <input key={i} type="radio" name="formula" onChange={ (e) => setselectedFormula(object)}/></a>))}
      <h4>Current formula = {selectedFormula.Formula}</h4>
      
      <lable>Alpha Winkel</lable>
      <input type="number" value={alphaangle} onChange={ (e) => {if(e.target.value <= 178){
          setalphaangle(e.target.value)
      }}}/>
      <lable>Beta Winkel</lable>
      <input type="number" value={betaangle} onChange={ (e) => {if(e.target.value <= 178){
          setbetaangle(e.target.value)
      }}}/>
      <lable>A länge </lable>
      <input type="number" value={alength} onChange={ (e) => {
          setalength(e.target.value)
      }}/>
      <lable>B länge </lable>
      <input type="number" value={blength} onChange={ (e) => {
          setblength(e.target.value)
      }}/>
      <button type="button" value="calculate" onClick={calculate}>calculate </button>

      <p>Alpha° = {alphaangle}</p>
      <p>Beta° = {betaangle}</p>
      <p>Gamma° = {gammaangle}</p>


      <p>A Länge {alength}</p>
      <p>B Länge {blength}</p>
      <p>C Länge {clength}</p>


      


        
      </header>
    </div>
  );
}
export default Dreieck;
