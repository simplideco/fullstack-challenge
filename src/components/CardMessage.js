import React from 'react';
import { priorityColors } from '../helpers/priotityColors';
import '../style/MessageList.css';

export function CardMessage({data}){

  return (
    <div className="card" style={{backgroundColor: `${priorityColors[data.priority - 1]}`}}>
    <p>{data.message}</p>
    <button className="btn-delete">clear</button>
  </div>
  );
};