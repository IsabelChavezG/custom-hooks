import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


    //estado inicial
    const initialState = [
        //PERSISTENCIA DE DATOS
        //Hacer que los datos se guarden en application/local Storage
        ];
    
        const init = () => {
        //JSON.parse es la funcion contraria a JSON.stringify
        //parsear los todos que vengan del local Storage, si esto es null || va a hacer la evaluacion de []
        return JSON.parse(localStorage.getItem('todos')) || [];
        }

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)
    //todoReducer no se le ponen () porque no se ejecuta

    //PERSISTENCIA. cuando el todo cambie, lanzar un efecto secundario para guardar los datos
    useEffect(() => {
        //leer los todos y serializarlos
        //console.log(todos);
        //guardar los todos en el local Storage
        //JSON.stringify( todos ) convierte los todos[] a String
        localStorage.setItem('todos', JSON.stringify( todos ));
        //con esto ya guarda los registros, pero al actualizar el navegador se vuelven a borrar
    
    }, [todos]) //caundo los todos cambian
    


    const handleNewTodo = ( todo ) => {
        //console.log({ todo });
        //aqui se crea la accion para el reducer
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        //aqui se le manda la accion al reducer mediante el dispatch 
        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        console.log({ id });
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        console.log(id)
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter( todo => !todo.done).length;


    return {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount,
    }


}
