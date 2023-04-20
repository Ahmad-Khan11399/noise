import Button from 'react-bootstrap/Button';
import {useState} from "react";
import "./App.css";
import AudioRecorder from "./audio.jsx";
function Intro()
{ const [display, setDisplay]=useState(false);
  if(display)
  {
    return <AudioRecorder/>
  }
  return (
         <div className="intro">
     <h1>Noise Detection App</h1>
      <Button onClick={()=>{setDisplay(true);}} className="start" size="lg" style={{backgroundColor:"#D75EEB"}}>Get Started</Button>
    </div>
  )

}
export default Intro;
