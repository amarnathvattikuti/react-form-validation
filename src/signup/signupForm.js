import React, {useState} from "react";

const SignupForm = (props) => {

   // console.log(props);

const {label, changeHandler, errorMessage, id, value, ...inputProps} = props;
    const[focused, setFocused] = useState(false);
    const blurHandler = (e) => {
    e.preventDefault();
    setFocused(true);
    }
    return(
        <> 
              <label className="block text-left mt-4">{label}
                <span className="text-gray-700"></span>
                <input className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " onChange={changeHandler}
                  {...inputProps} 
                   onBlur={blurHandler} 
                   focused={focused.toString()}
                  />
                 <p className="error">{errorMessage}</p>
              </label>
              
        </>
    );
}

export default SignupForm;