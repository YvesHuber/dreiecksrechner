import './App.css';
import {useEffect, useState} from "react";


function Dreieck() {



    const [alpha, setalpha] = useState(0);
    const [beta, setbeta] = useState(0);
    const [gamma, setgamma] = useState(0);

    function calculategamma(){
        setgamma(180-alpha-beta);
    }


  return (
    <div className="App">
      <header className="App-header">
      
        <lable>Alpha</lable>
      <input type="text" value={alpha} onChange={ (e) => {if(e.target.value <= 178){
          setalpha(e.target.value)
      }}}/>
      <lable>Beta</lable>
      <input type="text" value={beta} onChange={ (e) => {if(e.target.value <= 178){
          setbeta(e.target.value)
      }}}/>
      <button type="button" value="calculate" onClick={calculategamma}>calculate </button>

      <p>Alpha = {alpha}</p>
      <p>Beta = {beta}</p>
      <p>Gamma = {gamma}</p>

        
      </header>
    </div>
  );
}
export default Dreieck;
