import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const App = () => {
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });
  const { transcript, browserSupportSpeechRecognition } =
    useSpeechRecognition();

  // if (!browserSupportSpeechRecognition) {
  //   return null;
  // }
  return (
    <div className="mt-20 m-auto">
      <h2 className="text-3xl text-center text-lime-500  font-extrabold ">
        Speech to text Converter
      </h2>
      <div className="border-2 border-black  text-center  rounded-xl h-60 mx-auto mt-4 w-96  ">
        {transcript}
      </div>
      <div className=" mt-4 text-center ">
        <button
          className="border-2 mx-5 border-green-900 rounded-xl py-1 px-2"
          onClick={startListening}
        >
          StartListening
        </button>
        <button
          className="border-2 border-blue-400 rounded-xl py-1 px-2"
          onClick={SpeechRecognition.stopListening}
        >
          StopListening
        </button>
      </div>
    </div>
  );
};

export default App;
