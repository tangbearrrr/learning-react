import React from 'react'

const Greeting = (props) => {
    console.log("props : ", props);
    return (
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
        </div>
    );
}

const Description = (props) => {
    return (
        <div>
            <p>{props.label} : {props.value}</p>
        </div>
    )
}

export {
    Greeting,
    Description
}