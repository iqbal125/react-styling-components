import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () =>  {
  useEffect(() => {
    const element = document.getElementById('div3').getBoundingClientRect()
    console.log(element)
    window.scroll({top: element.top, behavior: 'smooth' })
  }, [])

  return (
    <div className="App">
      <div id="div1">
      Div 1
      </div>
      <div id="div2">
      Div 2
      </div>
      <div id="div3">
      Div 3
      </div>
      <div id="div4">
      Div 4
      </div>
      <div id="div5">
      Div 5
      </div>
    </div>
  );
}

export default App;
