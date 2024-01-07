import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Banner';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Montlysheet from './Pages/MontlySheet/Montlysheet';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import TotalSell from './Pages/TotalSell/TotalSell';
import Dashboard from './Pages/Dashborad/DashBorad';
import SellForm from './Pages/Dashborad/SellForm';
import Meet from './Pages/Meet/Meet';
import Deshboard from './Pages/Deshborad/Deshboard';
import MontyShet from './Pages/Dashborad/MontyShet';
import Row from './Pages/TotalSell/Row';
import ExShop1 from './Pages/TotalExpense/ExShop1';
import { useState } from 'react';
import Logger from './Pages/Lock/Logger';
import ShopLock2 from './Pages/Lock/ShopLock2';
import ShopLock3 from './Pages/Lock/ShopLock3';
import ShopLock4 from './Pages/Lock/ShopLock4';
import ShopLock5 from './Pages/Lock/ShopLock5';
import ShopLock6 from './Pages/Lock/ShopLock6';
import ShopLock7 from './Pages/Lock/ShopLock7';
import ShopLock8 from './Pages/Lock/ShopLock8';
import ShopLock9 from './Pages/Lock/ShopLock9';
import ShopLock11 from './Pages/Lock/ShopLock11';
import ShopLock10 from './Pages/Lock/ShopLock10';
import ShopLock12 from './Pages/Lock/ShopLock12';
import ShopLock13 from './Pages/Lock/ShopLock13';
import ShopLock14 from './Pages/Lock/ShopLock14';
import ShopLock15 from './Pages/Lock/ShopLock15';
import DeshBoardLock from './Pages/Lock/DeshBoardLock';
import TotalSell2 from './Pages/TotalSell/TotalSell2';
import TotalSell3 from './Pages/TotalSell/TotalSell3';
import TotalSell4 from './Pages/TotalSell/TotalSell4';
import TotalSell5 from './Pages/TotalSell/TotalSell5';
import TotalSell6 from './Pages/TotalSell/TotalSell6';
import TotalSell7 from './Pages/TotalSell/TotalSell7';
import TotalSell8 from './Pages/TotalSell/TotalSell8';
import TotalSell9 from './Pages/TotalSell/TotalSell9';
import TotalSell10 from './Pages/TotalSell/TotalSell10';
import TotalSell11 from './Pages/TotalSell/TotalSell11';
import TotalSell12 from './Pages/TotalSell/TotalSell12';
import TotalSell13 from './Pages/TotalSell/TotalSell13';
import TotalSell14 from './Pages/TotalSell/TotalSell14';
import TotalSell15 from './Pages/TotalSell/TotalSell15';


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [authenticatedShop2, setAuthenticatedShop2] = useState(false);
  const [authenticatedShop3, setAuthenticatedShop3] = useState(false);
  const [authenticatedShop4, setAuthenticatedShop4] = useState(false);
  const [authenticatedShop5, setAuthenticatedShop5] = useState(false);
  const [authenticatedShop6, setAuthenticatedShop6] = useState(false);
  const [authenticatedShop7, setAuthenticatedShop7] = useState(false);
  const [authenticatedShop8, setAuthenticatedShop8] = useState(false);
  const [authenticatedShop9, setAuthenticatedShop9] = useState(false);
  const [authenticatedShop10, setAuthenticatedShop10] = useState(false);
  const [authenticatedShop11, setAuthenticatedShop11] = useState(false);
  const [authenticatedShop12, setAuthenticatedShop12] = useState(false);
  const [authenticatedShop13, setAuthenticatedShop13] = useState(false);
  const [authenticatedShop14, setAuthenticatedShop14] = useState(false);
  const [authenticatedShop15, setAuthenticatedShop15] = useState(false);

  return (
    <div className="App ">
      <Navbar/>
    
     <Routes>
     <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/sheet' element={<Montlysheet/>}></Route>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/totalSell' element={<TotalSell/>}/>
    {/* <Route path='/addSell' element={<MontyShet/>}/> */}
    


    {/* <Route path="/" element={<Navigate to="/shoplock2" />} /> */}
                {/* <Route
          path="/deshboard"
          element={ ? <Deshboard /> : <Navigate to="/deshBoardLock" />}
        /> */}
        {/* shop log 2 */}

    {/* <Route path="/" element={<Navigate to="/shoplock2" />} /> */}
         <Route path="/shop1" element={<Navigate to="/shopLock1" />} />
        <Route path="/shopLock1" element={<Logger  setAuthenticated={setAuthenticated} />} />
        <Route
          path="/shop1/addSell"
          element={authenticated ? <MontyShet /> : <Navigate to="/shopLock1" />}
        />
        {/* shop log 2 */}
        <Route path="/shop2" element={<Navigate to="/shopLock2" />} />
        <Route path="/shopLock2" element={< ShopLock2 setAuthenticatedShop2={setAuthenticatedShop2} />} />
        <Route
          path="/shop2/addSell"
          element={authenticatedShop2 ? <MontyShet /> : <Navigate to="/shopLock2" />}
        />
        {/* shop log 3 */}
        <Route path="/shop3" element={<Navigate to="/shopLock3" />} />
        <Route path="/shopLock3" element={< ShopLock3 setAuthenticatedShop3={setAuthenticatedShop3} />} />
        <Route
          path="/shop3/addSell"
          element={authenticatedShop3 ? <MontyShet /> : <Navigate to="/shopLock3" />}
        />
        {/* shop log 4 */}
        <Route path="/shop4" element={<Navigate to="/shopLock4" />} />
        <Route path="/shopLock4" element={< ShopLock4 setAuthenticatedShop4={setAuthenticatedShop4} />} />
        <Route
          path="/shop4/addSell"
          element={authenticatedShop4 ? <MontyShet /> : <Navigate to="/shopLock4" />}
        />
        {/* shop log 5 */}
        <Route path="/shop5" element={<Navigate to="/shopLock5" />} />
        <Route path="/shopLock5" element={< ShopLock5 setAuthenticatedShop5={setAuthenticatedShop5} />} />
        <Route
          path="/shop5/addSell"
          element={authenticatedShop5 ? <MontyShet /> : <Navigate to="/shopLock5" />}
        />
  
        {/* shop log 6*/}
        <Route path="/shop6" element={<Navigate to="/shopLock6" />} />
        <Route path="/shopLock6" element={< ShopLock6 setAuthenticatedShop6={setAuthenticatedShop6} />} />
        <Route
          path="/shop6/addSell"
          element={authenticatedShop6 ? <MontyShet /> : <Navigate to="/shopLock6" />}
        />
  
        {/* shop log 7 */}
        <Route path="/shop7" element={<Navigate to="/shopLock7" />} />
        <Route path="/shopLock7" element={< ShopLock7 setAuthenticatedShop7={setAuthenticatedShop7} />} />
        <Route
          path="/shop7/addSell"
          element={authenticatedShop7 ? <MontyShet /> : <Navigate to="/shopLock7" />}
        />
  
        {/* shop log 8*/}
        <Route path="/shop8" element={<Navigate to="/shopLock8" />} />
        <Route path="/shopLock5" element={< ShopLock8 setAuthenticatedShop8={setAuthenticatedShop8} />} />
        <Route
          path="/shop8/addSell"
          element={authenticatedShop8 ? <MontyShet /> : <Navigate to="/shopLock8" />}
        />
  
        {/* shop log 9 */}
        <Route path="/shop9" element={<Navigate to="/shopLock9" />} />
        <Route path="/shopLock9" element={< ShopLock9 setAuthenticatedShop9={setAuthenticatedShop9} />} />
        <Route
          path="/shop9/addSell"
          element={authenticatedShop9 ? <MontyShet /> : <Navigate to="/shopLock9" />}
        />
  
        {/* shop log 10*/}
        <Route path="/shop10" element={<Navigate to="/shopLock10" />} />
        <Route path="/shopLock10" element={< ShopLock10 setAuthenticatedShop10={setAuthenticatedShop10} />} />
        <Route
          path="/shop10/addSell"
          element={authenticatedShop10 ? <MontyShet /> : <Navigate to="/shopLock10" />}
        />
  
        {/* shop log 11 */}
        <Route path="/shop11" element={<Navigate to="/shopLock11" />} />
        <Route path="/shopLock11" element={< ShopLock11 setAuthenticatedShop11={setAuthenticatedShop11} />} />
        <Route
          path="/shop11/addSell"
          element={authenticatedShop11 ? <MontyShet /> : <Navigate to="/shopLock11" />}
        />
  
        {/* shop log 12 */}
        <Route path="/shop12" element={<Navigate to="/shopLock12" />} />
        <Route path="/shopLock12" element={< ShopLock12 setAuthenticatedShop12={setAuthenticatedShop12} />} />
        <Route
          path="/shop12/addSell"
          element={authenticatedShop12 ? <MontyShet /> : <Navigate to="/shopLock12" />}
        />
  
        {/* shop log 13 */}
        <Route path="/shop13" element={<Navigate to="/shopLock13" />} />
        <Route path="/shopLock13" element={< ShopLock13 setAuthenticatedShop13={setAuthenticatedShop13} />} />
        <Route
          path="/shop13/addSell"
          element={authenticatedShop13 ? <MontyShet /> : <Navigate to="/shopLock13" />}
        />
  
        {/* shop log 14 */}
        <Route path="/shop14" element={<Navigate to="/shopLock14" />} />
        <Route path="/shopLock14" element={< ShopLock14 setAuthenticatedShop14={setAuthenticatedShop14} />} />
        <Route
          path="/shop14/addSell"
          element={authenticatedShop14 ? <MontyShet /> : <Navigate to="/shopLock14" />}
        />
        {/* shop log 15 */}
        <Route path="/shop15" element={<Navigate to="/shopLock15" />} />
        <Route path="/shopLock15" element={< ShopLock15 setAuthenticatedShop15={setAuthenticatedShop15} />} />
        <Route
          path="/shop15/addSell"
          element={authenticatedShop15 ? <MontyShet /> : <Navigate to="/shopLock15" />}
        />
  


    <Route path='/dashboard' element={<Dashboard></Dashboard>}>
   <Route index element={<TotalSell/>}></Route>
          <Route path="/dashboard/MyOrders" element={<Meet/>}></Route>
          <Route path="/dashboard/meet" element={<Meet/>}></Route>
        

  </Route>

  <Route  path='/deshboard' element={<Deshboard></Deshboard>}>
   <Route  index element={<MontyShet/>}></Route>
          {/* <Route path="/deshboard/addSell" element={<MontyShet/>}></Route> */}
          <Route path="/deshboard/shop1/totalSell" element={<TotalSell/>}></Route>
          <Route path="/deshboard/shop2/totalSell" element={<TotalSell2/>}></Route>
          <Route path="/deshboard/shop3/totalSell" element={<TotalSell3/>}></Route>
          <Route path="/deshboard/shop4/totalSell" element={<TotalSell4/>}></Route>
          <Route path="/deshboard/shop5/totalSell" element={<TotalSell5/>}></Route>
          <Route path="/deshboard/shop6/totalSell" element={<TotalSell6/>}></Route>
          <Route path="/deshboard/shop7/totalSell" element={<TotalSell7/>}></Route>
          <Route path="/deshboard/shop8/totalSell" element={<TotalSell8/>}></Route>
          <Route path="/deshboard/shop9/totalSell" element={<TotalSell9/>}></Route>
          <Route path="/deshboard/shop10/totalSell" element={<TotalSell10/>}></Route>
          <Route path="/deshboard/shop11/totalSell" element={<TotalSell11/>}></Route>
          <Route path="/deshboard/shop12/totalSell" element={<TotalSell12/>}></Route>
          <Route path="/deshboard/shop13/totalSell" element={<TotalSell13/>}></Route>
          <Route path="/deshboard/shop14/totalSell" element={<TotalSell14/>}></Route>
          <Route path="/deshboard/shop15/totalSell" element={<TotalSell15/>}></Route>





          <Route path="/deshboard/MyOrders" element={<Meet/>}></Route>
          <Route path="/deshboard/shop1/expense" element={<ExShop1/>}></Route>
          
       <Route path='/deshboard/register' element={<Register/>}/>

  </Route> 


     </Routes>
    </div>
  );
  }
    // Custom PrivateRoute component to handle authentication

export default App;


{/* <Redirect to="/Cheker.css" /> */}
{/* <Route path="/deshBoardLock" element={<DeshBoardLock />} /> */}

// }