import React from "react";
import './login.css'
import { useState } from "react";

export default function My_login(){

  const [useremail, setUseremail] = useState("");
  const [password,setPassword] = useState("");

return(

    <div> 
    <h1 class="text-3xl font-bold underline text-center mt-8">
Login Form
  </h1>

  <form className="mt-16 text-center pt-12">

<div >
<label className="font-bold"> Enter Username: &nbsp; </label>
<input type="text" className="w-64 p-2 rounded border-gray-200 border-2 border-black " placeholder="Enter UserName here" 

onChange={(event) => {
  setUseremail(event.target.value);
}}

/>
</div>

<div className="mt-16"> 
<label className="font-bold"> Enter Password: &nbsp;</label>
<input type="password"  className="w-64 p-2 rounded border-gray-200 border-2 border-black " placeholder="Enter Password here"
onChange={(event) => {
  setPassword(event.target.value);
}}

/>
</div>


<button type="submit" className="mt-16 bg-blue-600 text-white  border-2 border-black/30 font-bold p-4 rounded-lg " > Login Here</button>
 
 
<p>{useremail}</p>
<p>{password}</p>

 
  </form>

  </div>

)

}

