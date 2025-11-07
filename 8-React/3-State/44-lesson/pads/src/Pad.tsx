import { useReducer, useState } from 'react';

export default function Pad({ pad, toggle }) {
  const style = {
    background: pad.color,
  };
  return <button onClick={toggle} className={pad.on ? 'on' : undefined} style={style}></button>;
}
