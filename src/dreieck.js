import {useEffect, useState} from "react";
import * as THREE from 'three';



function Dreieck() {
  const scene = new THREE.Scene();

  const formuladata =[
    {Value: "c", Formula: "√ A^2 + B^2", id: 0, inputname1: "Kathete", inputname2: "Kathete", outputname: "Hypothenuse", input1: 0, input2: 0, result: 0},
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
      switch(selectedFormula.Value){
        case 0:
          //calculate the hypotenuse
          selectedFormula.result = 180 - selectedFormula.input1 - selectedFormula.input2;
          return;
        case 1:
          //calculate the kathete
          return;
        case 2:
          //calculate alphaangle
          return; 
        case 3:
          //calculate gammaangle
          return; 
        case 4:
          // calculate the height
          return;
      }
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
      setclength(Math.round(result));
    }
    function draw(){
      const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const camera = new THREE.PerspectiveCamera(
    20,
    window.innerWidth / window.innerHeight,
    1,
    500
  );
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);

  const scene = new THREE.Scene();

  const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

  const points = [];
  points.push(new THREE.Vector3(-10, 0, 0));
  points.push(new THREE.Vector3(10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(-10, 0, 0));

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(geometry, material);
  scene.add(line);
  renderer.render(scene, camera);
    }

    draw();

  return (
    <div className="App">
      <header className="App-header">
      <select>
      <option>What do you want to calculate</option>
          { selectFormulas.map ( (object, i) => (<option key={i} name="formula" placeholder={object.Value} value={object.Value} onChange={ (e) => setselectedFormula(object)}/>))}
      <h4>Current formula = {selectedFormula.Formula}</h4>
      </select>
      
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

    


      


        
      </header>
    </div>
  );
}
export default Dreieck;
