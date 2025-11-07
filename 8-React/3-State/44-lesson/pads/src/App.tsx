import { useState } from 'react';
import './App.css';
import padsData from './pads';
import Pad from './Pad';

function App({ darkMode }) {
  const [pads, setPads] = useState(padsData);

  const toggle = (id: number) => {
    setPads((prev) => prev.map((p) => (p.id === id ? { ...p, on: !p.on } : p)));
  };
  const turnAllOn = () => {
    setPads((prev) => prev.map((p) => ({ ...p, on: true })))
  };
  const turnAllOff = () => {
    setPads((prev) => prev.map((p) => ({ ...p, on: false })))
  };

  const buttons = pads.map((p) => {
    return <Pad key={p.id} pad={p} toggle={() => toggle(p.id)} />;
  });

  return (
    <main>
      <div className="pad-container">{buttons}</div>
      <button className="on" onClick={turnAllOff}>All off</button>
      <button className="on" onClick={turnAllOn}>All on</button>
    </main>
  );
}

export default App;
