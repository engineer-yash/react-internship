import React from 'react'; 
function MyDiv(){
    return(
        <div>
            <h1>My Div</h1>
        </div>
    );
}
class Subs extends React.Component{
    render(){
        var a=50, b=40;
        return(
        <div>
            <h1 style={{color:'yellow'}}>Substraction of {a} and {b} are {a-b}</h1>
        </div>);
    }
}

export default MyDiv;
export {Subs};
