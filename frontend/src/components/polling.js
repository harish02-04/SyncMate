import React from 'react'
import "../styles/polling.css";
import Result from './Result';
import 'react-circular-progressbar/dist/styles.css';
import { useState ,useEffect} from 'react';
import { CircularProgressbar ,buildStyles} from 'react-circular-progressbar';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Timetable from './Timetable';

export const Polling = () => {
  const [percentages, setPercentages] = useState({
    opt1: 20,
    opt2: 30,
    opt3: 40,
    opt4: 10,
  });
  const handleOptionClick = (option) => {
    setPercentages((prevPercentages) => {
      // Increment the clicked option by 10%
      const updatedPercentages = {
        ...prevPercentages,
        [option]: prevPercentages[option] + 10,
      };

      // Calculate the total percentage
      const totalPercentage = Object.values(updatedPercentages).reduce(
        (total, value) => total + value,
        0
      );

      // If the total percentage is greater than 100%, distribute the excess equally
      if (totalPercentage > 100) {
        const excess = totalPercentage - 100;
        const numOptions = Object.keys(updatedPercentages).length;

        // Distribute the excess equally among all options
        Object.keys(updatedPercentages).forEach((opt) => {
          updatedPercentages[opt] -= excess / numOptions;
        });
      }

      return updatedPercentages;
    });
  };
    const customStyles = buildStyles({
        pathColor: 'black', // Adjust the color here
        textColor: 'white',
        trailColor: '#d6d6d6',
        backgroundColor: '#ffff',
      });

  return (
    <div class="polling" style={{width:1200 ,bottom:400,position:'relative'}}>
            <header style={{fontSize:30,color:'#4481eb'}}>15th April,Monday</header>
    <header style={{fontSize:20}}><pre>Period 6       IT-3rd year</pre></header>
    <br/>
    <div class="wrapper">
    <div class="poll-area">
      <input type="checkbox" name="poll" id="opt-1"/>
      <input type="checkbox" name="poll" id="opt-2"/>
      <input type="checkbox" name="poll" id="opt-3"/>
      <input type="checkbox" name="poll" id="opt-4"/>
      <label for="opt-1" class="opt-1" onClick={() => handleOptionClick('opt1')}>
        <div class="row">
          <div class="column">
          <br/><br/>
            <span class="circle"></span>
    
        <span class="text" >   <pre>DesignThinking  </pre></span>
        <span class="">    <div style={{width:'50px'}}><CircularProgressbar  value={percentages.opt1} text={`${percentages.opt1}%`} styles={customStyles} /></div></span>
          </div>
        </div>
        <div class="progress" ></div>

      </label>
      
      <label for="opt-2" class="opt-2" onClick={() => handleOptionClick('opt2')}>
        <div class="row">
          <div class="column">
            <span class="circle"></span>
            <span class="text">   <pre>Java            </pre></span>
            <span class="">    <div style={{width:'50px'}}><CircularProgressbar  value={percentages.opt2} text={`${percentages.opt2}%`} styles={customStyles} /></div></span>
          </div>
          <span class="percent">20%</span>
        </div>
        <div class="progress" ></div>
      </label>
      <label for="opt-3" class="opt-3" onClick={() => handleOptionClick('opt3')}>
        <div class="row">
          <div class="column">
            <span class="circle"></span>
            <span class="text">   <pre>AIML            </pre></span>
            <span class="">    <div style={{width:'50px'}}><CircularProgressbar  value={percentages.opt3} text={`${percentages.opt3}%`} styles={customStyles} /></div></span>
          </div>
          <span class="percent">40%</span>
        </div>
        <div class="progress" ></div>
      </label>
      <label for="opt-4" class="opt-4" onClick={() => handleOptionClick('opt4')}>
        <div class="row">
          <div class="column">
            <span class="circle"></span>
            <span class="text">   <pre>Cloud Computing </pre></span>
            <span class="">    <div style={{width:'50px'}}><CircularProgressbar  value={percentages.opt4} text={`${percentages.opt4}%`} styles={customStyles} /></div></span>
          </div>
          <span class="percent">10%</span>
        </div>
        <div class="progress" ></div>
      </label>
    </div>
  </div></div>
  )
}
export default Polling;
