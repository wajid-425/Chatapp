import React from "react";
import './login.css'
import { useState } from "react";

export default function My_registration(){

const [username, setUsername] = useState("");
const [useremail, setUseremail] = useState("");
const [password,setPassword] = useState("");
const [confirmpassword, setConfirmpassword] = useState("");

return(
    <div> 
    <h1 class="text-3xl font-bold underline text-center mt-8">
Registration Form
  </h1>

  <form className="mt-16 text-center pt-12">

<div >
<label className="font-bold"> Enter Your Username: &nbsp; </label>
<input type="email"  required className="w-64 p-2 ml-8 rounded border-gray-200 border-2 border-black " placeholder="Enter userName here"  
   onChange={(event) => {
               setUsername(event.target.value);
            }} />
</div>

<div className="mt-8">
<label className="font-bold"> Enter Your email: &nbsp; </label>
<input type="email"  required className="w-64 p-2 ml-8 rounded border-gray-200 border-2 border-black " placeholder="Enter Email here"
onChange={(event) => {
  setUseremail(event.target.value);
}}
/>
</div>



<div className="mt-8 text-center"> 
<label className="font-bold"> Enter Password: &nbsp;</label>
<input type="password"  className="w-64 ml-12 p-2 rounded border-gray-200 border-2 border-black " placeholder="Enter Password here" 
onChange={(event) => {
  setPassword(event.target.value);
}}
/>
</div>

<div className="mt-8 text-center"> 
<label className="font-bold"> Confirm Password: &nbsp;</label>
<input type="password"  className="w-64 ml-12 p-2 rounded border-gray-200 border-2 border-black " placeholder="Enter Password here"
onChange={(event) => {
  setConfirmpassword(event.target.value);
}}
/>
</div>

<button type="submit" className="mt-16 bg-blue-600 text-white  border-2 border-black/30 font-bold p-4 rounded-lg " > Register Now</button>
  
<p>{username}</p>
<p>{useremail}</p>
<p>{password}</p>
  <p>{confirmpassword}</p>
  
  </form>


  </div>

)

}

