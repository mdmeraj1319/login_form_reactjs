import React, { useState } from 'react';
import './index.css';

const App = () => {
    const [fullName, setFullName] = useState({
        fname : "",
        lname : "",
        email : "",
    });

    const inputEvent = (event) =>{
        console.log(event.target.value);
        console.log(event.target.name);
        const value = event.target.value;
        const name = event.target.name;

        setFullName((preValue)=>{
            if(name === 'fName'){
                return {
                    fname: value ,
                    lname: preValue.lname,
                };
            }else if(name === 'lName'){
                return {
                    fname: preValue.fname ,
                    lname: value,
                };
            }else if(name === 'eMail'){
                return{
                    fname : preValue.fname ,
                    lname : preValue.lname ,
                    email : value ,
                };
            }
        });
    };

    const onSubmits = (event) =>{
        event.preventDefault();
        alert("form submitted");
    };
    
    return(
      <>
          <div className="main_div">
             <form onSubmit={onSubmits}>
                <div>
                    <h1> 
                        <p> Hello 😃 {fullName.fname} {fullName.lname} </p>  
                        <p>{ fullName.email}</p>
                    </h1>
                    <input
                        type = "text"
                        placeholder="Enter your name"
                        name ='fName'
                        onChange ={inputEvent}
                        value ={fullName.fname}
                    />
                    <br/>
                    <input
                        type = "text"
                        placeholder="Enter your Last name"
                        name ='lName'
                        onChange ={inputEvent}
                        value ={fullName.lname}
                    />
                    <br/>
                    <input
                        type = "text"
                        placeholder="Enter your Email"
                        name ='eMail'
                        onChange ={inputEvent}
                        value ={fullName.email}
                    />
                    <button type="submit"> Submit Me 👌</button>
                </div>
             </form>
          </div>
      </>
    );
}

export default App;