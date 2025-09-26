import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [lista, setLista] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim() !== "") {
      setLista([...lista, input]);
      setInput("");
    }
  };

  return (
    <div className="App" style={{ maxWidth: 400, margin: '40px auto', padding: 20, border: '1px solid #ccc', borderRadius: 8 }}>
      <header className="App-header">
        <h2>Adicionar itens à lista</h2>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Digite algo..."
          style={{ padding: '8px', width: '70%', marginRight: '8px' }}
        />
        <button onClick={handleAdd} style={{ padding: '8px 16px' }}>Adicionar</button>
        {lista.length > 0 && (
          <ul style={{ marginTop: 24 }}>
            {lista.map((item, idx) => (
              <li key={idx} style={{ padding: '4px 0' }}>{item}</li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
