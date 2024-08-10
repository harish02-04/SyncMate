import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const Application = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [letter,setletter]=useState([]);
  const [mod,setmod]=useState("");
  const [name,setname]=useState("");
  const [reg,setreg]=useState("");
  const [id, setId] = useState('');
  const openModal = (content,name,reg,id) => {
    setmod(content);
    setname(name);
    setreg(reg);
    setId(id)
    setIsModalOpen(true);
  };
  const handleAccept = () => {
    updateLetterStatus('Accepted');
  };

  const handleReject = () => {
    updateLetterStatus('Rejected');
  };

  const updateLetterStatus = (status) => {
    axios.put(`http://localhost:3001/letter/${id}`, { status })
      .then(response => {
        console.log(response.data.message);
        // If you need to update the UI or trigger any additional logic, you can do it here
      })
      .catch(error => {
        console.error('Error updating letter status:', error);
      });
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3001/get_letter',{regno:'111721203022'});
        setletter(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };



    fetchData();

 
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000); 


    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <h2 style={{ marginLeft: 300 }}>𝑨𝒑𝒑𝒍𝒊𝒄𝒂𝒕𝒊𝒐𝒏𝒔</h2>
      <br />
      <table className="table-bordered" style={{ width: 1000, height: 200, marginLeft: 300 }}>
      <thead>
        <tr>
          <th style={{ padding: 20 }}>Date</th>
          <th style={{ padding: 20 }}>Name</th>
          <th style={{ padding: 20 }}>RegisterNumber</th>
          <th style={{ padding: 20 }}>Subject</th>
          <th style={{ padding: 20 }}>Approval</th>
        </tr>
      </thead>
      <tbody>
        {letter.map((letter, index) => (
          <tr key={index}>
            <td style={{ padding: 20 }}>{letter.date}</td>
            <td style={{ padding: 20 }}>{letter.sname}</td>
            <td style={{ padding: 20 }}>{letter.regno}</td>
            <td style={{ padding: 20 }}>{letter.sub}</td>
            <td><center><b style={{ backgroundColor: '#4070f4', color: 'white', padding: 5, borderRadius: 5 }} onClick={() => openModal(letter.body,letter.sname,letter.regno,letter.id)}>View</b></center></td>
          </tr>
        ))}
      </tbody>
    </table>

     
      {isModalOpen && (
        
          <div className="modal-content" style={{ position: 'absolute',left:600,top:100, backgroundColor: 'white', border:'1px solid black',padding: 20 , width: 600, height: 400}}>
            <span className="close" onClick={closeModal} style={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer' ,color:'black',fontSize:30}}>&times;</span>
            <h3>From,</h3>
            <h5>{name}</h5>
            <h5>{reg}</h5>
            <p>{mod}</p>
          <br/><div style={{display:'flex'}}><button onClick={handleAccept} style={{ padding: 5, borderRadius: 5, backgroundColor: '#67fa3e', border: 0, width: 120, marginLeft: 100 }}>Accept</button>
            <button onClick={handleReject} style={{ marginLeft: 100, padding: 5, borderRadius: 5, backgroundColor: '#fc7968', border: 0, width: 120 }}>Reject</button></div>
          </div>
      
      )}
    </div>
  );
}

export default Application;
