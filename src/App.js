import './App.css';
import { useState } from 'react';
import main from './components/AOI-gpt.js';

function App() {
  const [response, setResponse] = useState('');

  const handleAskGPT = async (event) => {
    event.preventDefault();
    const inputPrompt = document.getElementById('inputPrompt').value;
    const response = await main(inputPrompt);
    setResponse(response);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Azure OpenAI Service</h1>
        <h3>Generate text using Azure OpenAI Service</h3>
          <h4>Enter prompt:</h4> 
          <input type="text" name="inputPrompt" id="inputPrompt" style={{ height: '2em', borderRadius: '1em', width: '80%'}} />
          <div style={{ paddingTop: '1em' }} >
          <button style={{ borderRadius: '0.5em' }} onClick={handleAskGPT}>Ask GPT</button>
            </div>

          <h4>Response:</h4> 
          <textarea value={response} readOnly  style={{ height: '8em', borderRadius: '1em', width: '80%'}} />
      </header>
    </div>
  );
}

export default App;
