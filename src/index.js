import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Streaming} from "@manishiitg/webrtc-call"
import DetectRTC from "detectrtc";

Streaming.checkGpuAndTF().then(() => {
  if (DetectRTC.isWebRTCSupported) {
    if (!Streaming.canLoadTflite()) {
      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById('root')
      );
    } else {
      const script = document.createElement('script');
      script.setAttribute('src', process.env.PUBLIC_URL + "/tflite/tflite.js");
      document.head.appendChild(script);

      script.onload = () => {
        const script2 = document.createElement('script');
        script2.setAttribute('src', process.env.PUBLIC_URL + "/tflite/tflite-simd.js");
        document.head.appendChild(script2);
        script2.onload = () => {
          ReactDOM.render(
            <React.StrictMode>
              <App />
            </React.StrictMode>,
            document.getElementById('root')
          );
        }

      }

    }
  } else {
    // this doesnt work. like in safai 10.1 webrtc is not supported. but the error comes even before build file is loaded.
    // so this index.js doesn't event get loaded in sasfari
    ReactDOM.render(
      <React.StrictMode>
        <div>Not web rtc</div>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
