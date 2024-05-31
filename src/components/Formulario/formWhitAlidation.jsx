import { useState } from "react"

export const formWhitValidation = (WrappedComponent) =>{
    
    const FormWhitValidation = (props) =>{
        const [errors, setErrors] = useState({})
        const validateForm = () =>{
            let newErrors = {}
            let isValid = true

            if (!props.formData.name) {
                newErrors.name = 'El campo name es obligatorio'
            }
            if (!props.formData.email) {
                newErrors.email = 'El campo email es obligatorio'
            }
            setErrors(newErrors) 
            return isValid
        }
        
        return <WrappedComponent {...props} errors= {errors} validateForm={validateForm}/>
    }

        

    return FormWhitValidation
}