import React, { useState } from 'react';

export const FunctionComponent = () => {
    const [count, setCount] = useState(0);
    const [films, addFilm] = useState(['film1', 'film2', 'film3']);
  
    return (
      <div>
        <h1>FunctionComponent</h1>
  
        <div>
          <h1>
            Count: <span>{count}</span>
          </h1>  
          <button onClick={()=>setCount(count + 1)}>increment</button>
          <button onClick={()=>setCount(count - 1)}>decrement</button>  
          {/* <Component setCount={setCount} count={count} /> */}
        </div>
        <div>
          <h1>Films: {films.map((film)=>(
                            <h1>{film}</h1>
                        ))}</h1>
          <button onClick={()=>addFilm([...films, 'New film'])}>add film</button>

        </div>
      </div>
    );
  };