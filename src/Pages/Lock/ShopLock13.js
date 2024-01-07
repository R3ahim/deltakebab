import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShopLock13 = ({ setAuthenticatedShop13 }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if the provided credentials are correct (replace with your logic)
    if (username === 'shop4' && password === 'shop4') {
      // Set authenticated to true and navigate to TotalValue
      setAuthenticatedShop13(true);
      navigate('/shop13/addSell');
    } else {
      // Handle incorrect credentials (you may show an error message)
      alert('Invalid credentials');
    }
  };

  return (
    <div  class="max-w-sm mx-auto">

     
      <div class="mb-5">
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
        Username:
        <input  id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
        </div>
        <div className="mb-5">
        <label  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
        Password:
        <input id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
        </div>
      <br />
      <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default ShopLock13;