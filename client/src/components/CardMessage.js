import React from 'react';
import { connect } from 'react-redux';
import { priorityColors } from '../helpers/priotityColors';
import { clearMessage } from '../redux/actions/message';
import '../style/MessageList.css';

function CardMessage(props){

  return (
    <div className="card" style={{backgroundColor: `${priorityColors[props.data.priority - 1]}`}}>
    <p>{props.data.message}</p>
    <button className="btn-delete" onClick={() => props.clearMessage({message: props.data.message}) }>clear</button>
  </div>
  );
};
const mapDispatchToProps = { clearMessage };
export default connect(null, mapDispatchToProps)(CardMessage);