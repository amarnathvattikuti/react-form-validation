import { useState } from 'react';
import SignupForm from './signup/signupForm';
import './App.css';




function App() {
 
const [values, setValues] = useState({
  Fullname: "",
  email: "",
  Birthday: "",
  Password: "",
  confirmPassword: "",
});

const inputs = [
  {
    id: 1,
    name: "Fullname",
    type: "text",
    placeholder: "Fullname",
    errorMessage: "fullname must have 6 to 16 charactor, and shoulnot include special charactor",
    label: "Fullname",
      pattern: "^[A-Za-z0-9]{6,16}$",
    required: true
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "email",
    errorMessage:"email must be valid eamil",
    label: "Email",
    pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+[a-z]{2,4}$",
    required: true
  },{
    id: 3,
    name: "Birthday",
    type: "date",
    placeholder: "Birthday",
    label: "Birthday"
  },{
    id: 4,
    name: "Password",
    type: "Password",
    placeholder: "Password",
    errorMessage:"password should have more than 6-20 charactors, and include 1 number, 1 special charactor",
    pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$",
    label: "Password",
    required: true
  },{
    id: 5,
    name: "confirmPassword",
    type: "Password",
    placeholder: "confirmPassword",
    errorMessage:"Password don't match",
    pattern:values.Password,
    label: "Confirm Password",
    required: true
  }
]

 const handleSubmit = (e) => {
   e.preventDefault();
 }
 
 const changeHandler = (e) => {
  e.preventDefault();
  setValues({...values, [e.target.name]: e.target.value});
 }


  //console.log(values);
  return (
    <div className="App container mx-auto lg:w-96 xl:w-80 2xl:80 p-4">
      <div className="mt-8 bg-white p-6 rounded-lg w-96">
        <h1 className='font-bold'>React Signup Form and Validations</h1>
        <div className="grid">
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <SignupForm key={input.id} 
              {...input} 
              value={values[input.name]} 
              onChange={changeHandler}
              />
              
              
            ))}
            <button className='bg-cyan-600 rounded-md p-2 w-80 text-white mt-8 hover:bg-blue-700'>Submit</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default App;
