import React from 'react'
import "../styles/time.css";
const Timetable = () => {
  return (
    <div>
        <div class="calender">

<div class="calendar-base">

  <div class="year">April 2024</div>




  <div class="months"> 
    <strong class="month-color" style={{fontSize:25}}>Today's Schedule</strong>
 
  </div>
  <hr class="month-line" />

  <div style={{padding:10,backgroundColor:'#668df7',marginTop:100,width:300,marginLeft:350,borderRadius:6}}>1. CloudComputing</div>
  <div style={{padding:10,backgroundColor:'#668df7',marginTop:10,width:300,marginLeft:350,borderRadius:6}}>2. AdvancedJava</div>
  <div style={{padding:10,backgroundColor:'#668df7',marginTop:10,width:300,marginLeft:350,borderRadius:6}}>3. MiniProject</div>
  <div style={{padding:10,backgroundColor:'#668df7',marginTop:10,width:300,marginLeft:350,borderRadius:6}}>4. NPTEL</div>
  <div style={{padding:10,backgroundColor:'#668df7',marginTop:10,width:300,marginLeft:350,borderRadius:6}}>5. MachineLearning</div>
  <div style={{padding:10,backgroundColor:'#668df7',marginTop:10,width:300,marginLeft:350,borderRadius:6}}>6.Polling </div>



  


</div>

<div class="calendar-left">

  <div class="hamburger">
    <div class="burger-line"></div>

    <div class="burger-line"></div>

    <div class="burger-line"></div>

  </div>



  <div class="num-date">15</div>

  <div class="day">MONDAY</div>

  <div class="current-events">
    <b>Infomation Technology-3rd Year</b>
    <br/>
 </div>


 

  <hr class="event-line" />
  

</div>


</div>

    </div>
  )
}
export default Timetable;
