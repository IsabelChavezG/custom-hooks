import { useState } from "react"

//no olvidar exportarlo para usarlo en otra clase
export const useCounter = ( initialValue = 10 ) => {
    //useCounter recibe un valor inicial, si ese valor no se le manda, se toma el 10 

    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        // setCounter( counter + value );
        setCounter( ( current ) => current + value ); //pruebas
    }

    const decrement = (value = 1) => {
        //para que no baje de cero
        if( counter === 0 ) return;

        //setCounter( counter - value );
        setCounter( ( current ) => current - value ); //cambio para hacer pruebas
    }

    const reset = () => {
        setCounter( initialValue );
    }

    //estrictamente importante importar el counter, para usar ese valor en CounterWithCustomHook
    return {
        counter,
        increment,
        decrement,
        reset,
    }
}