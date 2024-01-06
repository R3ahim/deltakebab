import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Banner';
import Navbar from './Pages/Shared/Navbar';
import { Route, Router, Routes ,Switch} from 'react-router-dom';
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
import ShopLock1 from './Pages/Lock/ShopLock1';
import ExShop1 from './Pages/TotalExpense/ExShop1';


function App() {
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
    <Route path='/shopLock1' element={<ShopLock1/>}/>
    

    <Route path='/to' element={<Row/>}/>

    <Route path="/addSell" element={<MontyShet/>}></Route>


    <Route path='/dashboard' element={<Dashboard></Dashboard>}>
   <Route index element={<TotalSell/>}></Route>
          <Route path="/dashboard/MyOrders" element={<Meet/>}></Route>
          <Route path="/dashboard/meet" element={<Meet/>}></Route>
        

  </Route>

    <Route path='/deshboard' element={<Deshboard></Deshboard>}>
   <Route index element={<MontyShet/>}></Route>
          <Route path="/deshboard/addSell" element={<MontyShet/>}></Route>
          <Route path="/deshboard/tuchola/totalSell" element={<TotalSell/>}></Route>
          <Route path="/deshboard/MyOrders" element={<Meet/>}></Route>
          <Route path="/deshboard/shop1/expense" element={<ExShop1/>}></Route>
          <Route path="/deshboard/MyOrders" element={<Meet/>}></Route>
          <Route path="/deshboard/meet" element={<Meet/>}></Route>
          <Route path='/deshboard/login' element={<Login/>}/>
       <Route path='/deshboard/register' element={<Register/>}/>

  </Route>


     </Routes>
    </div>
  );
}

export default App;
