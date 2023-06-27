//Hook para...

import { useState } from "react";

export const useForm = ( initialForm ) => {
  
    const [formState, setFormState] = useState( initialForm );

    //funcion para hacer el cambio del input (mandarlo a los input )
    const onInputChange = ({ target }) => {

        const {value, name} = target;

        setFormState({
            //mantener las propiedades del formState
            ...formState,
            //solo cambiar el name por el value [name] es el nombre de la prop
            [ name ]: value
        })
    }
  
    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        //lo que vamos a retornar para exponer en otra clase
        
        //desestructuramos el formState, desde aqui para usarlo en FormWithCustomHook
        ...formState,
        formState,
        onInputChange,
        onResetForm
  }
}
