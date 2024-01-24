import React, { useState } from 'react';
import classes from './style.module.css'


const Random = () => {
    const [random, setRandom] = useState(0);

    const handleButtonClick = (operation) => {
        const randomDelta = Math.floor(Math.random() * 51);

        if (operation === 'increment') {
            if(random + randomDelta < 50){
                setRandom((prevNumber) => prevNumber + randomDelta);
            }else{
                setRandom(50)
            }
        } else if (operation === 'decrement') {
            if((random - randomDelta )>= 0 ){
                     setRandom((prevNumber) => prevNumber - randomDelta); 
            }else{     
            setRandom(0) 
            }
            
        }
    };

    return (
        <div className={classes.main}>
            <p>Текущее значение: {random}</p>
            <button onClick={() => handleButtonClick('increment')}>+RND</button>
            <button onClick={() => handleButtonClick('decrement')}>-RND</button>
        </div>


    );
};

export default Random;