import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';


function TotalSell6() {
    const [user, loading, error] = useAuthState(auth);

    const [sells,setSells] = useState([])
    const [jsonData, setJsonData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
  
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
    const FilterEmail = jsonData.filter((item) =>item?.email === 'r8ahim@gmail.com');

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
      console.log(event.target.value)
    };
  

  

    const sellValues = filteredData.map((item) => parseFloat(item.totalSellValue) || 0);
    const cashValues = filteredData.map((item) => parseFloat(item.totalCashValue) || 0);
    const bankValues = filteredData.map((item) => parseFloat(item.totalBankValue) || 0);
    const glovoValues = filteredData.map((item) => parseFloat(item.glovoValue) || 0);
    const restomaticValues = filteredData.map((item) => parseFloat(item.restomaticValue) || 0);
    const phisnafelValues = filteredData.map((item) => parseFloat(item.phisnafelValue) || 0);

    // Calculate the sum using reduce
     const totalSell = sellValues.reduce((sum, value) => sum + value, 0);
     const totalCash = cashValues.reduce((sum, value) => sum + value, 0);
     const totalBank = bankValues.reduce((sum, value) =>  sum + value, 0);
     const totolGlovo = glovoValues.reduce((sum, value) =>  sum + value, 0);
     const totalRestomatic = restomaticValues.reduce((sum, value) =>  sum + value, 0);
     const totalPhisnafel = phisnafelValues.reduce((sum, value) =>  sum + value, 0);
     

useEffect(()=>{
    fetch(`https://deltaserverer.onrender.com/totalSell`)
    .then(res =>res.json())
    .then(data=>setSells(data))
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
    
        <th className='text-[16px]'>date</th> 
        <th>Total Sell</th> 
        <th>Bank</th> 
        <th>Cash</th> 
        <th>Glovo</th> 
        <th>Restomatic</th>
        <th>Phisnafel</th> 
      
      
      </tr>
    </thead> 
    <tbody>
     
      {filteredData.map((sell, index ) =>
        <tr>
           <td>{sell.time.split('-')[2]}</td> 
          <td>{sell.totalSellValue}</td> 
          <td>{sell.totalBankValue}</td> 
          <td>{sell.totalCashValue}</td> 
          <td>{sell.glovoValue}</td>
          <td>{sell.restomaticValue}</td>  
          <td>{sell.phisnafelValue}</td>  
        </tr>
        
      )}
      
    </tbody> 
    <tfoot>
      <tr className=' text-red-500'>
        <th></th> 
        <th className='text-[17px]'>{totalSell}</th> 
        <th  className='text-[17px]'>{totalBank}</th> 
        <th className='text-[17px]'>{totalCash}</th> 
        <th className='text-[17px]'>{totolGlovo}</th> 
        <th className='text-[17px]'>{totalRestomatic}</th> 
        <th className='text-[17px]'>{totalPhisnafel}</th> 
      </tr>
    </tfoot>
  </table>
</div>

    </div>
  )
}

export default TotalSell6