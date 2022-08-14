import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

  

function Daterange() {

    const [startDate,setStartDate] = useState(null);
    const [endDate,setEndDate] = useState(null);

  return (
    <div>
     
      <ReactDatePicker selected={startDate} 
        placeholderText="Start Date" 
        onChange={(date)=>setStartDate(date)}
        dateFormat='dd-MM-yyyy'
        maxDate={new Date()} />

      <ReactDatePicker selected={endDate} 
        placeholderText="End Date" 
        onChange={(date)=>setEndDate(date)}
        dateFormat='dd-MM-yyyy'
        minDate={startDate}
        isClearable={false} />
        


    </div>
  )
}

export default Daterange