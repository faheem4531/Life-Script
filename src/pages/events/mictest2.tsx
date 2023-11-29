import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import io from "socket.io-client";

const SpeechToAudio = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState(""); // New state for received text
  const micRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const dispatch = useDispatch();
  const socket = io("http://localhost:8000");
  console.log("1111", socket.connected);

  socket.on("transcription", (data) => {
    setTranscription((prevTranscription) => prevTranscription + data);
  });

  const handleStartRecording = async () => {
    setIsRecording(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micRef.current.srcObject = stream;

      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          // Send the current chunk to the server via WebSocket
          if (socket) {
            console.log("checkremit");
            socket.emit("audio-chunk", e.data);
          }
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

  useEffect(() => {
    return () => {
      if (socket.connected) {
        socket.disconnect();
      }
    };
  }, [socket]);

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
      <div>
        <p>Transcription:</p>
        <p>{transcription}</p>
      </div>
    </div>
  );
};

export default SpeechToAudio;
