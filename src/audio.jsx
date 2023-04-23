import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import AudioMeter from './audioMeter';
const AudioRecorder = () => {

  const [audioData, setAudioData] = useState(false);


  return (
    <div className="record">
     <div className="sub-div">
     <p>Kindly allow browser to use microphone </p>
       <Button onClick={()=>{setAudioData(true)}}>Press to get noise levels</Button>
        <p>Kindly Wait for some time after clicking the button</p>
     </div>
      {audioData?<AudioMeter/>:null}
    </div>
  );
}

export default AudioRecorder;
