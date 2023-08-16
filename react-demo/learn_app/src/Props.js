//Props.js - File
import React from 'react';
function Example(props){
    let msg;
    if(props.age>18){
        msg = "You are eligible to vote";
    }
    else{
        msg = "You are not eligible to vote";
    }
    return(
        <div>
        <p>Hey! {props.name} Are you {props.age} years old?</p>
        <p>{msg}</p>
        </div>
    )
}
export default Example;