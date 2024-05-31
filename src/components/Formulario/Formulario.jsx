import React, { useState } from 'react'
import Form from './Form'
import { formWhitValidation } from './formWhitAlidation'

const FormWhitAlidation = formWhitValidation(Form)

const Formulario = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    

    const handleOnChange = (evt) => {
        // console.log('Name: ', evt.target.name)
        // console.log('value: ', evt.target.value)
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }
    console.log(formData)
  return (
    <FormWhitAlidation formData={formData} handleOnChange={handleOnChange}/>
  )
}

export default Formulario
