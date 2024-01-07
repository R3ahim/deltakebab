import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
};

    const menuItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/sheet">MontlySheet</Link></li>
    <li><Link to="/totalSell">Total Sell</Link></li>
    <li><Link to="/dashboard"> Dashborad</Link></li>
    <li><Link to="/businessSummery">Profile</Link></li>
    <li><Link to="/login ">login</Link></li>
 

    </>
    
    return (
        <div class=" ">
        

<nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://restaumatic-production.imgix.net/uploads/restaurants/275281/logo/1689151634.png?auto=compress%2Cformat&crop=focalpoint&fit=clip&h=500&w=500" class="h-10" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Delta Kabab</span>
    </a>
    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <Link to={'/home'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</a>
                  </li></Link>
        <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Open shops <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>

            <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <Link to={'/shop1/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shop-1</a>
                  </li></Link>
                  <Link to={'/shop2/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shop-2</a>
                  </li></Link>
                  <Link to={'/shop3/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shop-3</a>
                  </li></Link>
                  <Link to={'/shop4/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shop-4</a>
                  </li></Link>
                  <Link to={'/shop5/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shop-5</a>
                  </li></Link>
                  <Link to={'/shop6/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shop-6</a>
                  </li></Link>
                  <Link to={'/shop7/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shop-7</a>
                  </li></Link>
                  <Link to={'/shop8/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shop-8</a>
                  </li></Link>
                  <Link to={'/shop9/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shop-9</a>
                  </li></Link>
                  <Link to={'/shop10/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shop-10</a>
                  </li></Link>
                  <Link to={'/shop11/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shop-11</a>
                  </li></Link>
                  <Link to={'/shop12/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shop-12</a>
                  </li></Link>
                  <Link to={'/shop13/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shop-13</a>
                  </li></Link>
                  <Link to={'/shop14/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shop-14</a>
                  </li></Link>
                  <Link to={'/shop15/addSell'}>  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shop-15</a>
                  </li></Link>
                  
                  
                </ul>
                
            </div>
        </li>
        <li>
          {user?.email === 'shop1@gmail.com'?<Link to="/deshboard" >Dashboard</Link>:<a></a>}
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Company</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li>

          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

      </div>
    );
};

export default Navbar;