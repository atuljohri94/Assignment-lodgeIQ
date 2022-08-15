import '../App.css'
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';




function Task() {
  let date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  let showDateRange = moment(firstDay).format('ddd, MMM DD,YYYY')+" - "+ moment(lastDay).format('ddd, MMM DD,YYYY')

  const [startDate, setStartDate] = useState(new Date(new Date().setDate(new Date().getDate() - 1)));
  const [dtRange,setDtRange] = useState(showDateRange);
  const [sDate,setSDate] = useState(moment(firstDay).format('MM/DD/YYYY'));
  const [eDate,setEDate] = useState(moment(lastDay).format('MM/DD/YYYY'));
  const [showDiv,setShowDiv] = useState(false);   

  const [dateStart,setDateStart] = useState(firstDay);
  const [dateEnd,setDateEnd] = useState(lastDay);


  var timeInterval = 'M';
  const setDtRangeNext = ()=>{   
    firstDay = document.getElementById('sDate').value;
    lastDay = document.getElementById('eDate').value;
    var getSelectedValue = document.querySelector( 'input[name="optradio"]:checked');   
    if(getSelectedValue.value === 'M'){
      timeInterval = 30
    }else if(getSelectedValue.value === '30'){
      timeInterval = 30
    }else if(getSelectedValue.value === '60'){
      timeInterval = 60
    }else if(getSelectedValue.value === '90'){
      timeInterval = 90
    }else{
      const date1 = new Date(firstDay);
      const date2 = new Date(lastDay);
      const diffInMs = Math.abs(date2 - date1);
      timeInterval =  diffInMs / (1000 * 60 * 60 * 24);      
    }    
    firstDay = moment(lastDay).add(1,'d').format('MM/DD/YYYY')
    lastDay =  moment(lastDay).add(timeInterval,'d').format('MM/DD/YYYY'); 
    setSDate(firstDay);
    setEDate(lastDay);
    setDateStart(new Date(moment(firstDay).format('MM/DD/YYYY')))
    setDateEnd(new Date(moment(lastDay).format('MM/DD/YYYY')))
    let showDateRange = moment(firstDay).format('ddd, MMM DD,YYYY')+" - "+ moment(lastDay).format('ddd, MMM DD,YYYY')
    setDtRange(showDateRange);
  }

  const setDtRangePrev = ()=>{   
    firstDay = document.getElementById('sDate').value;
    lastDay = document.getElementById('eDate').value;
      
    var getSelectedValue = document.querySelector('input[name="optradio"]:checked');   
    if(getSelectedValue.value === 'M'){
      timeInterval = 30
    }else if(getSelectedValue.value === '30'){
      timeInterval = 30
    }else if(getSelectedValue.value === '60'){
      timeInterval = 60
    }else if(getSelectedValue.value === '90'){
      timeInterval = 90
    }else{
      const date1 = new Date(firstDay);
      const date2 = new Date(lastDay);
      const diffInMs = Math.abs(date2 - date1);
      timeInterval =  diffInMs / (1000 * 60 * 60 * 24);      
    }        
    firstDay = moment(firstDay).subtract(timeInterval,'d').format('MM/DD/YYYY')
    lastDay =  moment(firstDay).add(timeInterval-1,'d').format('MM/DD/YYYY'); 
    setSDate(firstDay);
    setEDate(lastDay);
    
    setDateStart(new Date(moment(firstDay).format('MM/DD/YYYY')))
    setDateEnd(new Date(moment(lastDay).format('MM/DD/YYYY')))
    
    let showDateRange = moment(firstDay).format('ddd, MMM DD,YYYY')+" - "+ moment(lastDay).format('ddd, MMM DD,YYYY')
    setDtRange(showDateRange);
  }
  
  const handleSelect = (e) => {
    let checkedValue = e.target.value;
    firstDay = document.getElementById('sDate').value;
    lastDay = document.getElementById('eDate').value;
    date = new Date();
      if(checkedValue === 'M'){
        
        firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);        
      }else if(checkedValue === '30'){
        timeInterval = 30
        firstDay = new Date();
        firstDay = moment(firstDay).format('MM/DD/YYYY')
        lastDay =  moment(firstDay).add(timeInterval,'d').format('MM/DD/YYYY'); 
      }else if(checkedValue === '60'){
        timeInterval = 60
        firstDay = new Date();
        firstDay = moment(firstDay).format('MM/DD/YYYY')
        lastDay =  moment(firstDay).add(timeInterval,'d').format('MM/DD/YYYY'); 
      }else if(checkedValue === '90'){
        timeInterval = 90
        firstDay = new Date();
        firstDay = moment(firstDay).format('MM/DD/YYYY')
        lastDay =  moment(firstDay).add(timeInterval,'d').format('MM/DD/YYYY'); 
      }else{
       /* const date1 = new Date(dateStart);
        const date2 = new Date(dateEnd);
        const diffInMs = Math.abs(date2 - date1);
        timeInterval =  diffInMs / (1000 * 60 * 60 * 24); */

        firstDay = moment(dateStart).format('MM/DD/YYYY')
        lastDay =  moment(dateEnd).format('MM/DD/YYYY');
      } 

      //const my_date = new Date(moment(firstDay).format('MM/DD/YYYY'));
      setDateStart(new Date(moment(firstDay).format('MM/DD/YYYY')))
      setDateEnd(new Date(moment(lastDay).format('MM/DD/YYYY')))

      setSDate(moment(firstDay).format('MM/DD/YYYY'));
      setEDate(moment(lastDay).format('MM/DD/YYYY'));

      
        let showDateRange = moment(firstDay).format('ddd, MMM DD,YYYY')+" - "+ moment(lastDay).format('ddd, MMM DD,YYYY')
        setDtRange(showDateRange);

  }

   
  const changeStartDate = (val) => {        
    document.getElementById("radio5").checked = true;
    setDateStart(new Date(moment(val).format('MM/DD/YYYY')))       
    firstDay = moment(val).format('MM/DD/YYYY')
    lastDay =  moment(dateEnd).format('MM/DD/YYYY');
    let showDateRange = moment(firstDay).format('ddd, MMM DD,YYYY')+" - "+ moment(lastDay).format('ddd, MMM DD,YYYY')
    setDtRange(showDateRange);
    setSDate(moment(firstDay).format('MM/DD/YYYY'));
      setEDate(moment(lastDay).format('MM/DD/YYYY'));
  }
  const changeEndDate = (val) => {    
    document.getElementById("radio5").checked = true;
    firstDay = moment(dateStart).format('MM/DD/YYYY')
    lastDay =  moment(val).format('MM/DD/YYYY');
    setDateEnd(new Date(moment(val).format('MM/DD/YYYY')))  
    let showDateRange = moment(firstDay).format('ddd, MMM DD,YYYY')+" - "+ moment(lastDay).format('ddd, MMM DD,YYYY')
    setDtRange(showDateRange); 
    setSDate(moment(firstDay).format('MM/DD/YYYY'));
      setEDate(moment(lastDay).format('MM/DD/YYYY'));
  }

  return (
    <div className='container'>
    <div className='dialog-box texttop'>
        STAY DATES - AS OF {moment(startDate).format('ddd, MMM-Do YYYY')}
      </div>
      
      <div className='outerDiv'>
          <div className='leftdiv' onClick={setDtRangePrev} ><i className="fa fa-angle-left"></i></div>
          <div className='div-mid-content' onClick={()=>setShowDiv(!showDiv)}>{dtRange}</div>
          <div className='rightdiv' onClick={setDtRangeNext}><i className="fa fa-angle-right"></i></div>

      </div>
       

      <div className="holder">  
    {
      showDiv ?
        <div className="dropdown">
          <div className="tab rounded">
            <button className="tablinks">Date</button>
            <button className="tablinks active">Range</button>
            <button className="tablinks">Weekly</button>
            <button className="tablinks br-right0">Monthly</button>
          </div> 
          <div className='radiostyle'>          
            <div className="form-check">
              <input type="radio" className="form-check-input" id="radio1" name="optradio" value="M" onChange={handleSelect} defaultChecked />
              <label className="form-check-label" for="radio1">Currect Month</label>
            </div>
            <div className="form-check"> 
              <input type="radio" className="form-check-input" id="radio2" name="optradio" value="30" onChange={handleSelect} />
              <label className="form-check-label" for="radio2">Next 30 days</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="radio3" name="optradio" value="60" onChange={handleSelect}/>
              <label className="form-check-label" for="radio3">Next 60 days</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="radio4" name="optradio" value="90" onChange={handleSelect}/>
              <label className="form-check-label" for="radio4">Next 90 days</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="radio5" name="optradio" value="custom" onChange={handleSelect}/>
              <label className="form-check-label" for="radio5">Custom</label>
            </div>
          </div>

          <div className='date-input'>
            <input type="hidden" id="sDate" name='sDate' value={sDate} style={{ width: '140px', margin: '20px' }} />            
            <input type="hidden" id="eDate" name="eDate" value={eDate} style={{ width: '140px', margin: '10px' }} />
             
            <ReactDatePicker selected={dateStart}
                placeholderText="Start Date"
                onChange={changeStartDate}
                dateFormat='MM/dd/yyyy' maxDate={dateEnd} className="dateStartClass" style={{ width: '140px', margin: '10px' }}  />

            <ReactDatePicker selected={dateEnd}
                placeholderText="End Date"
                onChange={changeEndDate}
                dateFormat='MM/dd/yyyy' minDate={dateStart} style={{ width: '140px', margin: '10px' }} />   


          </div>

          <div className='applybuttom text-center'>
            <button id='apply1' className='btn btn-primary btncenter'>Apply</button>
          </div>

          <div className='asofdate'>
            <div className=''>As Of Date</div>
            <div style={{ 'padding-top': '20px' }}>
              <ReactDatePicker selected={startDate}
                placeholderText="Start Date"
                onChange={(date)=>setStartDate(date)}
                dateFormat='MM/dd/yyyy'style={{ width: '140px', margin: '10px' }} />
            </div>
          </div>
          <div className='applybuttom text-center'>
            <button id='apply2' className='btn btn-primary btncenter'>Apply</button>
          </div>



        </div>
        : ""
    }    
      </div>


    </div>
  )
}

export default Task