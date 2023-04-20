import React, { useState, useEffect } from 'react';
import Speedometer from "./speed.jsx";
function AudioMeter() {
  const [noiseLevel, setNoiseLevel] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // get the audio context
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // get the microphone input
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const microphone = audioContext.createMediaStreamSource(stream);

        // create a script processor node to analyze the audio data
        const scriptProcessor = audioContext.createScriptProcessor(2048, 1, 1);
        microphone.connect(scriptProcessor);
        scriptProcessor.connect(audioContext.destination);

        // process the audio data
        scriptProcessor.onaudioprocess = (event) => {
          // get the decibel level from the audio data
          const inputBuffer = event.inputBuffer;
          const inputData = inputBuffer.getChannelData(0);
          let sum = 0;
          for (let i = 0; i < inputData.length; i++) {
            sum += inputData[i] * inputData[i];
          }
          const rms = Math.sqrt(sum / inputData.length);
          const db = 20 * Math.log10(rms) + 93;
          // update the noise level state
          setNoiseLevel(db);

          // update the image and message based on the noise level
          if (db <= 50) {

            setMessage('Quiet place');
          } else if (db > 50 && db <= 70) {

            setMessage('People talking normally');
          } else if (db > 70 && db <= 90) {

            setMessage('Loud music concert');
          } else {

            setMessage('May cause damage to the ears');
          }
        };
      })
      .catch((error) => {
        console.error('Failed to get microphone input:', error);
      });
  }, []);

  return (
    <>
      <Speedometer value={Math.round(noiseLevel)} msg={message} />
  <strong>    <p>{Math.round(noiseLevel)}</p></strong>
    <strong>  <p>{message}</p> </strong>


    </>
  );
}

export default AudioMeter;
