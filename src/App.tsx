import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Really Sure??",
  "BAB PLEASE?!?!",
  "u hate me",
  "i cri now...",
  "Do u not love me?",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="cats kissing"
            src="https://media.giphy.com/media/KmxmoHUGPDjfQXqGgv/giphy.gif?cid=ecf05e47w0o8vwsbd75fgwebypcq2s7q3z35gk23m4xexzoa&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          />
          <div className="text">Yay!!!!</div>
        </>
      ) : (
        <>
          <img
            alt="cat with hearts"
            src="https://media.giphy.com/media/2aJ5rY2QoHfPUmfynu/giphy.gif?cid=ecf05e47jz5ovh3t4hf6iac1sx4yd15kvgywmrs240bd4cdj&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          />
          <div>Will you be my valentine?????</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
