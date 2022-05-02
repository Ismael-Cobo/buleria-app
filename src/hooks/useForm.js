import { useState } from "react"

export const useForm = ( initialState = {} ) => {
    
    const [values, setvalues] = useState(initialState)

    const reset = ( newState = initialState) =>{
        setvalues(newState)
    }

    const handleInputChange = ({ target }) => {
        setvalues({
            ...values,
            [target.name]: target.value 
        })
    }


    return [values, handleInputChange, reset]
}
