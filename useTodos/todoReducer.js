
//acciones a realizar del useReducer
//este es el REDUCER que necesita el useReducer como argumento
export const todoReducer = ( initialState, action ) => {

    switch ( action.type ) {
        case '[TODO] Add Todo':
            return[ ...initialState, action.payload];

        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                
                //si el todo.id es igual al todo que se seleccionó, cambiarle el done
                if( todo.id === action.payload ){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
            
        default:
            return initialState;
    }

}



//Cuando algo no esta terminado, se puede lanzar una excepcion, en lugar del return
            //throw new Error('Action.type = ABC no esta terminado');