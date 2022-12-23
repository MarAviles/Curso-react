import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = ( iterationNumber = 100 ) => {
    for( let i=0; i<iterationNumber; i++){
        console.log('ahí vamos');
    }

    return `${ iterationNumber } iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter } = useCounter( 4000 );
    const [show, setShow] = useState(true);

    const memorizeValue = useMemo( () => heavyStuff(counter), [counter]);


  return (                        
    <>
        <h1>Counter: <small>{ counter }</small> </h1>
        <hr/>

        <h4>{ heavyStuff( memorizeValue ) }</h4>

        <button
            className="btn btn-primary"
            onClick={ () => counter() }
        >
            +1
        </button>

        <button
            className="btn btn-outline-primary"
            onClick={ () => setShow( !show ) }    
        >
            Show/Hide { JSON.stringify(show) }
        </button>
    </>

  )
}
