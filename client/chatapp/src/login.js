// import React, { useState } from "react";
// import bcrypt from "bcryptjs";

// export default function My_login() {
//   const [useremail, setUseremail] = useState("");
//   const [password, setPassword] = useState("");

//   const show_userlogin = async (e) => {
//     e.preventDefault();

//     const hashedPassword = await bcrypt.hash(password, 7);

   
//     fetch("http://localhost:3001/api/user/users")
//       .then((response) => response.json())
//       .then((data) => {

//         console.log(hashedPassword)
        
//         const matchedUser = data.find((user) => user.username === useremail && user.password===password);

//         if (matchedUser) {
       
//           console.log("Matched");
//           console.log(data)

//           const userId = matchedUser._id; 
//           console.log("Matched. User ID:", userId);

//         } else {
          
//           console.log("Not Matched");
//         }
//       })
//       .catch((error) => console.error("Error fetching user data:", error));
//   };

//   return (
//     <div className="mt-20">
//       <h1 className="text-4xl font-bold underline text-center mt-8">
//         Login Form
//       </h1>

//       <form className="mt-16 text-center pt-12" onSubmit={show_userlogin}>
//         <div>
//           <label className="font-bold text-lg"> Username: &nbsp; </label>
//           <input
//             type="text"
//             className="w-64  p-4 rounded border-gray-200 border-2  "
//             placeholder="Enter UserName here"
//             value={useremail}
//             onChange={(event) => {
//               setUseremail(event.target.value);
//             }}
//           />
//         </div>

//         <div className="mt-16">
//           <label className="font-bold text-lg"> Password: &nbsp;</label>
//           <input
//             type="password"
//             className="w-64 p-4 rounded border-gray-200 border-2 "
//             placeholder="Enter Password here"
//             value={password}
//             onChange={(event) => {
//               setPassword(event.target.value);
//             }}
//           />
//         </div>

//         <button
//           type="submit"
//           className="mt-16 bg-blue-600 text-white  border-2 border-black/30 font-bold p-4 rounded-lg "
//         >
//           {" "}
//           Login Here
//         </button>
//       </form>
//     </div>
//   );
// }






// ------------------------------ Data ------------------------------------//




import React, { useState } from "react";
import bcrypt from "bcryptjs";

export default function My_login() {
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  const [hashedPassword, setHashedPassword] = useState('');
  const [decryptedPassword, setDecryptedPassword] = useState('');




  const hashPassword = async () => {
    try {
      const saltRounds = 10;
      const hashed = await bcrypt.hash(password, saltRounds);
      setHashedPassword(hashed);
    } catch (error) {
      console.error('Error hashing password:', error);
    }
  };

 
  const decryptPassword = async () => {
    try {
      const isMatch = await bcrypt.compare(password, hashedPassword);
      if (isMatch) {
        setDecryptedPassword(password);
      } else {
        setDecryptedPassword('Password does not match');
      }
    } catch (error) {
      console.error('Error decrypting password:', error);
    }
  };


  

  const show_userlogin = async (e) => {
    e.preventDefault();

 
   
    fetch("http://localhost:3001/api/user/users")
      .then((response) => response.json())
      .then((data) => {

       
        
        const matchedUser = data.find((user) => user.username === useremail && user.password===decryptPassword);

        if (matchedUser) {
       
          console.log("Matched");
          console.log(data)

          const userId = matchedUser._id; 
          console.log("Matched. User ID:", userId);

        } else {
          
          console.log("Not Matched");
        }
      })
      .catch((error) => console.error("Error fetching user data:", error));
  };

  return (
    <div className="mt-20">
      <h1 className="text-4xl font-bold underline text-center mt-8">
        Login Form
      </h1>

      <form className="mt-16 text-center pt-12" onSubmit={show_userlogin}>
        <div>
          <label className="font-bold text-lg"> Username: &nbsp; </label>
          <input
            type="text"
            className="w-64  p-4 rounded border-gray-200 border-2  "
            placeholder="Enter UserName here"
            value={useremail}
            onChange={(event) => {
              setUseremail(event.target.value);
            }}
          />
        </div>

        <div className="mt-16">
          <label className="font-bold text-lg"> Password: &nbsp;</label>
          <input
            type="password"
            className="w-64 p-4 rounded border-gray-200 border-2 "
            placeholder="Enter Password here"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="mt-16 bg-blue-600 text-white  border-2 border-black/30 font-bold p-4 rounded-lg "
        >
          {" "}
          Login Here
        </button>

        <button onClick={hashPassword}>Hash Password</button>
      <button onClick={decryptPassword}>Decrypt Password</button>
      <div>
        <p>Hashed Password: {hashedPassword}</p>
        <p>Decrypted Password: {decryptedPassword}</p>
      </div>


      </form>
    </div>
  );
}
