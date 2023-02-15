import React, { useState } from 'react';
import Pawandubey from './Pawandubey';

const Blogs = () => {
    
    const [count,setCount] = useState(0);
    const [fruit, setFruit] = useState('banana');

    return(
            <>
            <Pawandubey mycolor="Yellow" />
            <h1>Blog Articles & Hooks understanding</h1>

            <h1>Counter:{ count }</h1>
            <h1>Fruit Name:{ fruit }</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>&nbsp;&nbsp;
            <button onClick={() => setFruit('orange')}>Change fruit</button>

            </>
    ) 
  };
  
  export default Blogs;