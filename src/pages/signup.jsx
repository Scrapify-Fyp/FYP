import React from 'react';
import "./signin.css";
import Signupform from '../Components/Signupform';
import imge1  from "../img/signinimge2.jpg";


export default function Signup() { 
  return (
    <>
   <div className='container'>
        <div className="signinpage">
            <div>
                <img id="signin-imge" src={imge1} className="img-fluid" alt="..."/>
            </div>
            <div className='inputform'>
                <Signupform/>
            </div>
        </div>
   </div>
    
    </>
  )
}
