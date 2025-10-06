import React, { useState } from 'react'

export const SimpleForm = () => {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");

    const handleName = (ev) => {
        console.log(ev.target.name)
        console.log(ev.target.value)
        setName(ev.target.value)
    }

    const handleEmail = (ev) => {
         console.log(ev.target.name)
        console.log(ev.target.value)
        setEmail(ev.target.value)
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        alert(`Name: ${name} Email: ${email}`)
        setName('')
        setEmail('')
    }

  return (
    <div>
        <h3>Form example</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name: </label>
            <input required placeholder="Enter your name" type='text' name='name' 
                value={name} onChange={handleName} />

            <label htmlFor='email'>Email: </label>
            <input placeholder='Enter your email' type='email' name='email' 
                value={email} onChange={handleEmail} />

            <button type='submit'>
                Submit
            </button>
        </form>
    </div>
  )
}

export const ComplexForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: ''
    })

    const handleFieldChange = (ev) => {
        const {name, value} = ev.target;
        setFormData(prevState => ({...prevState, [name]: value}))
        console.log(formData)
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        alert(`Name: ${formData.name} Email: ${formData.email}`)
        setFormData({}); // reset
    }

      return (
    <div>
        <h3>Form Data example</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name: </label>
            <input required placeholder="Enter your name" type='text' name='name' 
                value={formData.name} onChange={handleFieldChange} />
            <label htmlFor='email'>Email: </label>
            <input placeholder='Enter your email' type='email' name='email' 
                value={formData.email} onChange={handleFieldChange} />
            <button type='submit'>
                Submit
            </button>
        </form>
    </div>
  )
}
