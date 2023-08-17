"use client"
import React, { useState } from 'react';
import Red from './red.js';
import Blue from './blue.js';
import Green from './green';
import Yellow from './yellow';
function Colorchange(props){
const [count, setCount] = useState(0);
    const increaseCount = () => {
        setCount(count + 1);
    };
    
    const increaseYellowCount = () => {
        setCount(count + 1);
    };
    
    return(
        <>
        <div className="colorchange"></div>
        <div className="countingcolor">
        <h4 className="red">Red:{count}</h4>
        <h4 className="blue">Blue:{count}</h4>
        <h4 className="green">Green :{count}</h4>
        <h4 className="yellow">yellow:{count}</h4>
        </div>
        <Red />
        <Blue />
        <Green
            onClickLikes={()=>increaseCount()}
         />
        <Yellow
            onClickLikes={()=>increaseYellowCount()}
         />
        </>
    )   
};

export default Colorchange;
