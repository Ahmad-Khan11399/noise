import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import AudioMeter from './audioMeter';
const AudioRecorder = () => {

  const [audioData, setAudioData] = useState(false);


  return (
    <div className="record">
    <strong>   <h2>Kindly allow browser to use microphone </h2></strong>
      <Button onClick={()=>{setAudioData(true)}}>Press to get noise levels</Button>
       <p>Kindly Wait for some time after clicking the button</p>
      {audioData?<AudioMeter/>:null}
    </div>
  );
}

export default AudioRecorder;
