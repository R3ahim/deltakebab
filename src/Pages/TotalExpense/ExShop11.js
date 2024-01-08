import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function ExShop11() {
    const [expances,setexpances] = useState([])
    const [jsonData, setJsonData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
    const [user] = useAuthState(auth)

    useEffect(() => {
      // Fetch data from time.json when the component mounts
      fetchData();
  
      // Set the initial selectedDate to the current month
      const today = new Date();
      const initialSelectedDate = today.toISOString().slice(0, 7); // Format: YYYY-MM
      setSelectedDate(initialSelectedDate);
    }, []);
  
    useEffect(() => {
      // Update filteredData when jsonData or selectedDate changes
      filterData();
    }, [jsonData, selectedDate]);
  
    const fetchData = async () => {
      try {
        const response = await fetch("https://deltaserverer.onrender.com/totalSell"); // Assumes time.json is in the public folder
        const data = await response.json();
        setJsonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const FilterEmail = jsonData.filter((item) =>item?.email === 'shop11@gmail.com');
    const filterData = () => {
      const selectedMonth = new Date(selectedDate).getMonth() + 1;
      const selectedYear = new Date(selectedDate).getFullYear();
  
      const filteredData = FilterEmail.filter((appointment) => {
        const appointmentMonth = new Date(appointment.time).getMonth() + 1;
        const appointmentYear = new Date(appointment.time).getFullYear();
  
        return (
          appointmentMonth === selectedMonth && appointmentYear === selectedYear && user?.email === 'admin@gmail.com'
        );
      });
  
      setFilteredData(filteredData);
    };
  
    const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
    };
  

  

    const expanceValues = filteredData.map((item) => parseFloat(item.meet) || 0);
    const cashValues = filteredData.map((item) => parseFloat(item.fudi) || 0);
    const bankValues = filteredData.map((item) => parseFloat(item.warzaya) || 0);
    const glovoValues = filteredData.map((item) => parseFloat(item.cola) || 0);
    const restomaticValues = filteredData.map((item) => parseFloat(item.opakowania) || 0);
    const phisnafelValues = filteredData.map((item) => parseFloat(item.gaz) || 0);
    const othersValue = filteredData.map((item) => parseFloat(item.others) || 0);
    const dCostValue = filteredData.map((item) => parseFloat(item.dCost) || 0);
    const opakowaniaValue = filteredData.map((item) => parseFloat(item.opakowania) || 0);

    // Calculate the sum using reduce
     const totalexpance = expanceValues.reduce((sum, value) => sum + value, 0);
     const totalCash = cashValues.reduce((sum, value) => sum + value, 0);
     const totalBank = bankValues.reduce((sum, value) =>  sum + value, 0);
     const totolGlovo = glovoValues.reduce((sum, value) =>  sum + value, 0);
     const totalRestomatic = restomaticValues.reduce((sum, value) =>  sum + value, 0);
     const totalPhisnafel = phisnafelValues.reduce((sum, value) =>  sum + value, 0);
    //  const totalOpakonia = opakowaniaValue.reduce((sum, value) =>  sum + value, 0);
     const totalOthers = othersValue.reduce((sum, value) =>  sum + value, 0);
     const totaldCost = dCostValue.reduce((sum, value) =>  sum + value, 0);
     

     useEffect(()=>{
      fetch(`https://deltaserverer.onrender.com/totalSell`)
      .then(res =>res.json())
      .then(data=>setexpances(data))
  },[])
  

  return (
    <div className=''>

    <div className="overflow-x-auto  ">
    
            <input
              type="month"
              id="month"
              className='btn'
              value={selectedDate}
              onChange={handleDateChange}
            />
    
      <table className="table  w-full mx-0 text-[16px]">
        <thead>
          <tr className='text-[30px]'>
        
            {/* <th className='text-[16px]'>date</th> 
            <th>Total expance</th> 
            <th>Bank</th> 
            <th>Cash</th> 
            <th>Glovo</th> 
            <th>Restomatic</th>
            <th>Phisnafel</th>  */}
               <th>Date</th> 
               <th>Details</th> 
            <th>Meat</th> 
            <th>Fudi</th> 
            <th>Warzywa</th>
            <th>Cola</th> 
            <th>Opakowania</th> 
            <th>gaz</th> 
            <th>others</th> 
         
            <th>D.cost</th> 
          
          </tr>
        </thead> 
        <tbody>
         
          {filteredData.map((expance, index ) =>
            <tr>
               <td>{expance.time.split('-')[2]}</td> 
             <Link to={`/deshboard/shop1/${expance._id}`} className="px-3 py-2 text-xs font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-geen-300 dark:focus:ring-green-500">details</Link>
              <td>{expance.meet}</td> 
              <td>{expance.fudi}</td> 
              <td>{expance.warzaya}</td> 
              <td>{expance.cola}</td>
              <td>{expance.opakowania}</td>  
              <td>{expance.gaz}</td>  
              <td>{expance.others}</td>  
              <td>{expance.dCost}</td>  
              <td>{expance.totaldCost}</td>  
            </tr>
            
          )}
          
        </tbody> 
        <tfoot>
          <tr className=' text-red-500'>
            <th></th> 
            <th></th> 
            <th className='text-[17px]'>{totalexpance}</th> 
            <th  className='text-[17px]'>{totalCash}</th> 
            <th className='text-[17px]'>{totalBank}</th> 
            <th className='text-[17px]'>{totolGlovo}</th> 
            <th className='text-[17px]'>{totalRestomatic}</th> 
            <th className='text-[17px]'>{totalPhisnafel}</th> 
            <th className='text-[17px]'>{totalOthers}</th> 
            <th className='text-[17px]'>{totaldCost}</th> 
          </tr>
        </tfoot>
      </table>
    </div>
    
        </div>
  )
}

export default ExShop11