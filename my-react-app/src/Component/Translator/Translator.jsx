import React, { useState } from "react";
import axios from "axios";
import "../Css/Translator.css";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("es"); // Default to Spanish
  const [isListening, setIsListening] = useState(false);

  // Google Translate API Key
  const apiKey = "YOUR_GOOGLE_TRANSLATE_API_KEY"; // Replace with your API key

  // Handle translation
  const handleTranslate = async () => {
    if (!inputText) {
      alert("Please enter text to translate.");
      return;
    }

    try {
      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
        {
          q: inputText,
          target: targetLanguage,
        }
      );

      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error("Error during translation:", error);
      alert("Translation failed. Please try again.");
    }
  };

  // Handle speech-to-text (voice input)
  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support voice recognition.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInputText(transcript);
    };

    recognition.start();
  };

  // Handle text-to-speech (voice output)
  const speakTranslation = () => {
    if (!translatedText) {
      alert("Please translate text first.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(translatedText);
    utterance.lang = targetLanguage; // Set the language of the voice output
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="translator-container">
      <h1>Modern Translator</h1>
      <textarea
        placeholder="Enter text to translate..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>
      <button onClick={startListening}>
        {isListening ? "Listening..." : "🎤 Voice Input"}
      </button>
      <select
        value={targetLanguage}
        onChange={(e) => setTargetLanguage(e.target.value)}
      >
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="zh">Chinese</option>
        <option value="hi">Hindi</option>
        {/* Add more languages as needed */}
      </select>
      <button onClick={handleTranslate}>Translate</button>
      {translatedText && (
        <div className="output">
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
          <button onClick={speakTranslation}>🔊 Play Translation</button>
        </div>
      )}
    </div>
  );
};

export default Translator;
