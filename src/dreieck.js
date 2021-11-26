import { useState} from "react";



export default function Dreieck() {

  const [data, setdata] = useState([
    {Name: "a", value: ""},
    {Name: "b", value: ""},
    {Name: "c", value: ""},
    {Name: "alpha", value: ""},
    {Name: "beta", value: ""},
    {Name: "gamma", value: ""},
  ])


  const formuladata =[
    {Formula: "Lösung 1 Seite 2 = Hypothenuse", id: 1},
    {Formula: "Lösung 2 Seite 2 = Katethe", id: 2},
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

      
    }


    function calculate(){    
      console.log(formulaid);


      if (formulaid == 1){

        // Seite 2 = hypothesis
        var angle = Math.round(Math.asin(input1 / input2) * 100);
        var length = Math.sqrt(Math.pow(input2, 2) - Math.pow(input1, 2));

        console.log(angle)
        setbeta(angle)
        console.log(length)
        setresult(length)
        console.log(180-beta-input3)
        setgamma(180-beta-input3)

      }
      else if (formulaid == 2){

        // Seite 2 = cathete

        var length = Math.sqrt(Math.pow(input2, 2) + Math.pow(input1, 2));

        console.log(length)
        setresult(length)
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



            <h2>Results</h2>
            {data.map(result => result.value)}
      <canvas id="canvas" width="500" height="500"></canvas>

      </header>
    </div>
  );
}
