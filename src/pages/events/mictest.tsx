import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

const SpeechToAudio = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const micRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const dispatch: any = useDispatch();

  const handleStartRecording = async () => {
    setIsRecording(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micRef.current.srcObject = stream;

      const mediaRecorder = new MediaRecorder(stream);
      let blob;
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          blob = new Blob([e.data], { type: "audio/ogg" });
          setAudioFile(blob);
        }
      };

      mediaRecorder.onstop = () => {
        setIsRecording(false);
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const handleStopRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
    }
  };

  return (
    <div>
      {isRecording && <p>Recording in progress...</p>}
      <audio ref={micRef} />
      <button onClick={handleStartRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={handleStopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
      {audioFile && <audio src={URL.createObjectURL(audioFile)} controls />}
    </div>
  );
};

export default SpeechToAudio;
