import React from 'react';
import './App.css';

//functional components
function App() {
  return (
    <div>
      <h1>Marvel App</h1>
    </div>
  );
}
function Add(){
  var a =50, b = 200;
  return(
    <div>
      <h2>Addition of {a} and {b} is {a+b}</h2>
    </div>
  );
}
function Sub(){
  var a =50, b = 200;
  return(
    <div>
      <h2>Subtraction of {a} and {b} is {a-b}</h2>
    </div>
  );
}

//class components
class OyDiv extends React.Component{
  render(){
      return(
          <div>
              <h1>My Div2</h1>
          </div>
      );
  }
}
class Add2 extends React.Component{
  render(){
    let a = 800, b = 100;
    return(
      <div>
        <h2>Addition of {a}
         and {b} is {a+b}</h2>
      </div>
    );
  }
}
export default App;
export {Add,Sub,OyDiv,Add2};
