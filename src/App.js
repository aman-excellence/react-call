import React from 'react';
import './App.css';
import { Call } from "@manishiitg/webrtc-call";
// import Modal from './Modal';
// import clsx from "clsx";
// const user = localStorage.getItem('CUSTOMER_DATA')
// const room =123
// console.log(user)
function App() {
  // const [data, setData] = useState({
  //   room: '',
  //   email: '',
  //   name: ' '
  // })

  // const [show, setShow] = useState(false)

  // useEffect(() => {
  //   setShow(true)
  //   return () => setShow(false);
  // }, [])

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // }

  return (
    <div style={{height: "100vh"}}>
        <Call room={123} autoconnect={true}  enableChat={false} disableVideo={false} defaultProfile={
          {
            "email": `abc@gmail.com`,
            "name": `aman`
          }
        } />
    </div>
  );
}

export default App;
