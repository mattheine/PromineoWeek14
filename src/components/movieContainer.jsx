import React from 'react';

//
export function MovieContainer(props){
    console.log(props);
    return (
        <div className= 'container'>
            {props.value.title}
        </div>
    )
}