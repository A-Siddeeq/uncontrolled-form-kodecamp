import { useRef } from 'react'
import './App.css'

function App() {

  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const phoneRef = useRef(null)
 
   const handleSubmit = (e) => {
     e.preventDefault()
     const firstName = firstNameRef.current.value
     const lastName = lastNameRef.current.value
     const email = emailRef.current.value
     const phone = phoneRef.current.value

     if(!firstName || !lastName || !email || !phone){
      alert("Please fill all fields")
    }else {
      console.log("Form submitted", { firstName, lastName, email, phone });
      alert("Form Submitted Successfully")

      // Reset the input fields
      firstNameRef.current.value = '';
      lastNameRef.current.value = '';
      emailRef.current.value = '';
      phoneRef.current.value = '';
    }
  }

   return (
    <div className='container'>
      <h1>Uncontrolled Form</h1>
   <div className='box'>
     <form onSubmit={handleSubmit}>
       <label htmlfor="firstName">First Name</label>
       <input 
         name="firstName"
         type="text"
         ref={firstNameRef}
         placeholder='Type your First Name..'
         />
        <label htmlfor="Last Name">Last Name</label>
         <input 
         name="lastName"
         type="text"
         ref={lastNameRef}
         placeholder='Type your Last Name..'
         />
          <label htmlfor="Email">Email</label>
          <input 
         name="email"
         type="email"
         ref={emailRef}
         placeholder='eg: example@mail.com'
         />
        <label htmlfor="phone">Phone Number</label>
         <input 
         name="phone"
         type='number'
         inputMode="numeric"
         ref={phoneRef}
         placeholder='11 digit number..'
         minLength={11}
         />
       <button type="submit">SUBMIT</button>
     </form>
   </div>
   </div>
   );
 }

export default App
