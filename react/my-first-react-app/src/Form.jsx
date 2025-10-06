import React from 'react'

const Form = () => {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");

    const handleName = (ev) => {
        console.log(ev.target.value)
        setName(ev.target.value)
    }

    const handleEmail = (ev) => {
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
            <input required placeholder="Enter your name" type='text' id='name' 
                value={name} onChange={handleName} />

            <label htmlFor='email'>Email: </label>
            <input placeholder='Enter your email' type='email' id='email' 
                value={email} onChange={handleEmail} />

            <button type='submit'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default Form
