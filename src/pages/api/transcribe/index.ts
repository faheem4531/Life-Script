// pages/api/transcription.js

import fs from "fs";

const { Deepgram } = require("@deepgram/sdk");

const { Readable } = require("stream");

// Your Deepgram API Key
const deepgramApiKey = "4f1dff16a5a14651cabba7f9bed72f79ad40d1f0";

export default async function handler(req, res) {
  const deepgram = new Deepgram(deepgramApiKey);

  const stream = await new Promise((resolve, reject) => {
    const audioFilePath = "src/pages/api/transcribe/audio.ogg"; // Replace with the actual path to your audio file

    // Check if the file exists
    if (!fs.existsSync(audioFilePath)) {
      res.status(404).json({ error: "Audio file not found" });
      reject("Audio file not found");
      return;
    }

    const audioBuffer = fs.readFileSync(audioFilePath);
    const audioStream = new Readable();
    audioStream.push(audioBuffer);
    // audioStream.push(null);

    const deepgramLive = deepgram.transcription.live({
      smartFormat: true,
      interimResults: false,
      language: "en-US",
      model: "nova",
    });

    deepgramLive.addListener("transcriptReceived", (message) => {
      const data = JSON.parse(message);
      const newTranscript = data.channel.alternatives[0].transcript;
      console.log("111", newTranscript);
    });

    deepgramLive.addListener("error", (error) => {
      console.error("WebSocket error:", error);
      reject(error);
    });

    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
    });

    deepgramLive.addListener("open", () => {
      audioStream.pipe(deepgramLive);
    });

    deepgramLive.addListener("close", () => {
      console.log("Connection closed.");
      res.end(); // Close the response stream
    });

    resolve(audioStream);
  });

  return stream;
}
