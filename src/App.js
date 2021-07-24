import React, { useState, useEffect } from 'react';
import './App.css';
import { Call } from "@manishiitg/webrtc-call";
import Modal from './Modal';
// const user = localStorage.getItem('CUSTOMER_DATA')
// const room =123
// console.log(user)

function App() {
  const [data, setData] = useState({
    room: '',
    email: '',
    name: ' '
  })

  const [show, setShow] = useState(false)
  
  useEffect(() => {
  setShow(true)
 
  }, [])

  const handleSubmit =(e)=>{
    e.preventDefault()
  }
  console.log('all data', data)
  
  return (
    <div className="App">
       {show===true?
     <Modal setShow={setShow} data={data} setData={setData} handleSubmit={handleSubmit}/>:
      <Call room={data.room} autoconnect={true} enableChat={false} disableVideo={false} defaultProfile={
        {
          "email": `${data?.email}`,
          "name": `${data?.name}`
        }
      } />}

    </div>
  );
}

export default App;
