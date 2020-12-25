import React, { useState } from 'react';
import './index.css';

const App = () => {
    const [details,setDetails] = useState({
        fname : "",
        lname : "",
        email : "",
    });
    const updates = (event) => {
       const name = event.target.name;
       const value = event.target.value;
        setDetails((preValue)=>{
            if(name === 'fName'){
                return{
                   fname : value ,
                   lname : preValue.lname ,
                   email : preValue.email ,
                };
            }else if(name === 'lName'){
                return{
                    fname : preValue.fname ,
                    lname : value ,
                    email : preValue.email,
                };
            }else if(name === "eMail"){
                return{
                    fname : preValue.fname , 
                    lname : preValue.lname , 
                    email : value
                };
            }
        });
        
    };
    const onSubmits = (event) =>{
        event.preventDefault();
        alert("from submitted");
    }
    return(
        <>
           <div>
               <form onSubmit = {onSubmits}>
                   <div>
                       <h1> Hello {details.fname} {details.lname} {details.email} </h1>
                       <input type="text" placeholder="Enter your first Name" name="fName"  onChange={updates} value ={details.fname} ></input>
                       <input type="text" placeholder="Enter your Second Name" name="lname"  onChange={updates} value={details.lname} ></input>
                       <input type="text" placeholder="Enter your E-mail" name="eMail"  onChange={updates} value={details.email} ></input>
                       <button type="submit">Click me 🖕</button>
                   </div>
               </form>
           </div>


        </>
    );
}

export default App;