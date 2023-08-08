import React from 'react';

function Table(props){
    return(
        <div>
        <p>Hey! {props.name} Are you {props.age} years old?</p>
        </div>
    )
}

export default Table;