import React, { useState } from 'react';
import bcrypt from 'bcryptjs';

const MyForm = () => {
  const [password, setPassword] = useState('');
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

  return (
    <div>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={hashPassword}>Hash Password</button>
      <button onClick={decryptPassword}>Decrypt Password</button>
      <div>
        <p>Hashed Password: {hashedPassword}</p>
        <p>Decrypted Password: {decryptedPassword}</p>
      </div>
    </div>
  );
};

export default MyForm;
