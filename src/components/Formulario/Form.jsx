import React from 'react'

const Form = ({formData ,handleOnChange, errors, validateForm}) => {

    const handleOnsubmit = (evt) =>{
        evt.preventDefault()
        if (validateForm()) {
            console.log('enviado: ', formData)
        }
        
    }


  return (
    <section>
      <form onSubmit={handleOnsubmit}>
        <input type="text" name='name' placeholder='ingrese su nombre' onChange={handleOnChange} value={formData.name}/>
        <br />
        {errors && errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
        <input type="text" name='email' placeholder='ingrese su email' onChange={handleOnChange} value={formData.email}/>
        {errors && errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
        <button>Enviar</button>
      </form>
    </section>
  )
}

export default Form
