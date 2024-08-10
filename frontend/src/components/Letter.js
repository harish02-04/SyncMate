import React, { useState} from 'react'
import "../styles/letter.css";
import { useEffect } from 'react';
import axios from 'axios';
const Letter = () => {
    const [name,setname]=useState("");
    const [reg,setreg]=useState("");
    const [sub,setsub]=useState("");
    const [date,setdate]=useState(new Date().toISOString().slice(0, 10));
    const [body,setbody]=useState("");
    const [letter,setletter]=useState([]);
    
    useEffect(() => {
        // Define a function to fetch data for a specific registration number
        const fetchData = async () => {
          try {
            const response = await axios.post('http://localhost:3001/get_letter',{regno:'111721203022'});
            setletter(response.data); // Update component state with fetched data
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        // Specify the registration number for which you want to continuously fetch data
         // Replace '123456' with your desired registration number
    
        // Call the fetchData function initially when the component mounts
        fetchData();
    
        // Set up an interval to periodically fetch updated data (e.g., every 5 seconds)
        const intervalId = setInterval(() => {
          fetchData();
        }, 5000); // Adjust the interval duration as needed (in milliseconds)
    
        // Clean up the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []);


    const handleSubmit = async e => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:3001/insert_letter', {date:date, sname:name,regno: reg,sub: sub,body: body,status:"Pending"});
          alert('Data added successfully!');
          setname("");
          setbody("");
          setreg("");
          setsub("");
        } catch (error) {
          console.error('Error adding data:', error);
          alert('An error occurred while adding data.');
        }
      };
  return (
    <div class="letter">
        <section id="form-section">
        <h1 class="h1-tag">Write a Letter...</h1>
        <form class="form-content-section">
            <div class="form-group">
                <label for="exampleInputText" style={{fontSize:20}}>𝑵𝒂𝒎𝒆</label>
                <input type="text" class="form-control" value={name} onChange={(ev)=>setname(ev.target.value)} id="exampleInputText" placeholder="Enter Your Name" />
            </div>
            <br/>
            <div class="form-group">
                <label for="exampleInputEmail1" style={{fontSize:20}}>𝑹𝒆𝒈𝒊𝒔𝒕𝒆𝒓𝑵𝒖𝒎𝒃𝒆𝒓</label>
                <input type="text" class="form-control" value={reg} onChange={(ev)=>setreg(ev.target.value)}
id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email"/>
               
            </div>
            <br/>
            <div class="form-group">
                <label for="exampleInputText" style={{fontSize:20}}>𝑺𝒖𝒃𝒋𝒆𝒄𝒕
</label>
                <input type="text" class="form-control" value={sub} onChange={(ev)=>setsub(ev.target.value)}
id="exampleInputText"/>
            </div>
            <br/>
            <div class="form-group">
                <label for="exampleFormControlTextarea1" style={{fontSize:20}}>𝑩𝒐𝒅𝒚
</label>
                <textarea class="form-control" value={body} onChange={(ev)=>setbody(ev.target.value)}
id="exampleFormControlTextarea1" rows="3"></textarea>
            </div><br/>
            <div>
                
            </div>
            <button type="submit" class="btn btn-primary myclass" onClick={handleSubmit}>Submit</button>
        </form>
        <br/><br/><br/>
        <div ><h2 style={{marginLeft:300}}>𝑴𝒚 𝑨𝒑𝒑𝒍𝒊𝒄𝒂𝒕𝒊𝒐𝒏𝒔</h2><br/>
                  <table className="table table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Subject</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {letter.map((item, index) => (
            <tr key={index} style={{ height: '70px' }}>
              <td>{item.date}</td>
              <td>{item.sub}</td>
              <td>
                <center>
                  <b style={{ backgroundColor: getStatusColor(item.status), padding: 5, borderRadius: 5 }}>{item.status}</b>
                </center>
              </td>
            </tr>
          ))}
        </tbody>
      </table></div>
        
    </section>
    
    </div>
  )
}

const getStatusColor = (status) => {
  switch (status) {
    case 'Rejected':
      return '#fc7968';
    case 'Accepted':
      return '#67fa3e';
    case 'Pending':
      return '#ecfa2a';
    default:
      return '#fff';
  }
};
export default Letter;
