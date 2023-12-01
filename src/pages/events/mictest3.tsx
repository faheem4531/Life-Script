import { useEffect, useState } from "react";

const MyComponent = () => {
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState("");

  const startRecording = async (recordValue) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      let mediaRecorder = new MediaRecorder(stream);
      const socket = new WebSocket("wss://api.deepgram.com/v1/listen", [
        "token",
        "4f1dff16a5a14651cabba7f9bed72f79ad40d1f0",
      ]);
      if (recordValue === true) {
        mediaRecorder.addEventListener("dataavailable", (event) => {
          if (event.data.size > 0 && socket.readyState === 1) {
            socket.send(event.data);
          }
        });

        socket.onmessage = (message) => {
          const received = JSON.parse(message.data);
          const receivedTranscript =
            received.channel?.alternatives[0]?.transcript;
          if (receivedTranscript && received.is_final) {
            setTranscript(
              (prevTranscript) => prevTranscript + receivedTranscript + " "
            );
          }
        };
        socket.onopen = () => {
          console.log("WebSocket open");
        };

        socket.onclose = () => {
          console.log("WebSocket closed");
        };

        socket.onerror = (error) => {
          console.error("WebSocket error:", error);
        };

        setRecording(true);
        mediaRecorder.start(2000);
      } else {
        console.log("recorder stop");
        mediaRecorder.stop(); // Stop the recording process
        mediaRecorder.removeEventListener("dataavailable", () => {
          // console.log("listner removed");
        });
        // console.log("socket closed");
        socket.close(); // Close the WebSocket connection
        setRecording(false);
        mediaRecorder = null;
      }
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const handleSpeech = () => {
    setRecording(!recording);
  };

  useEffect(() => {
    if (!recording) return;

    startRecording(recording);

    // Clean up resources when component unmounts or recording stops
    return () => {
      setRecording(false);
      // Additional cleanup logic (e.g., closing connections) can be added here
    };
  }, [recording]);

  return (
    <div>
      <button onClick={handleSpeech} disabled={recording}>
        {recording ? "Recording..." : "Start"}
      </button>
      <button onClick={handleSpeech}>stop</button>
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default MyComponent;
