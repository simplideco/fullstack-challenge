import React, { Component, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { setError, clearError } from '../redux/actions/userInterface';
import { addMessage, deleteAllMessage } from '../redux/actions/message';
import CardMessage from './CardMessage';
import MessageGenerator from '../helpers/MessageGenerator';


function MessageListApp(props){
  
  // manage state info
  const messageCallback = (message) =>  {
    props.addMessage(message);

    // update snackbar error
    if (message.priority === 1) {
      props.setError({ info: message.message, isErr: true });
      setTimeout(() => { props.clearError() }, 3000)
    };
  };

  const api = new MessageGenerator({messageCallback: (message) => {
    messageCallback(message)
  }});

  useEffect(() => {
    console.log("Generating message.");
    api.start();
  },[]);

  const renderButton = () => {
    const isApiStarted = api.isStarted()
    return (
      <div id="buttons">
        <Button
          variant="contained"
          onClick={() => {
            if (isApiStarted) {
              api.stop()
            } else {
              api.start()
            }
          }}
        >
          {isApiStarted ? 'Stop Messages' : 'Start Messages'}
        </Button>
        <Button variant="contained" onClick={props.deleteAllMessage}>clear</Button>
      </div>
    )
  };

  return (
    <>
      {props.ui.snackbar.isErr
        && <div className="alert">
          {props.ui.snackbar.info}
          <button onClick={ () => props.clearError() }>close</button>
        </div>}
      <h1>Coding Challenge</h1>
      <hr />
      {renderButton()}
      <div id="container">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid container item xs={4} justify="center" direction="column">
            <h2>Error Type 1</h2>
            <small>Count {props.messages.messages.filter((message) => message.priority === 1 ).length }</small>
            {
              props.messages.messages.map((msg) => msg.priority === 1 && <CardMessage key={msg.message} data={msg} />)
            }
          </Grid>
          <Grid container item xs={4} justify="center" direction="column">
            <h2>Warning Type 2</h2>
            <small>Count {props.messages.messages.filter((message) => message.priority === 2 ).length }</small>
            {
              props.messages.messages.map((msg) => msg.priority === 2 && <CardMessage key={msg.message} data={msg} />)
            }
          </Grid>
          <Grid container item xs={4} justify="center" direction="column">
            <h2>Info Type 3</h2>
            <small>Count {props.messages.messages.filter((message) => message.priority === 3 ).length }</small>
            {
              props.messages.messages.map((msg) => msg.priority === 3 && <CardMessage key={msg.message} data={msg} />)
            }
          </Grid>
        </Grid>
      </div>
    </>
  );
};

const mapStateToProps = state => ({ messages: state.message, stopGeneration: state.stopGeneration, ui: state.ui });
const mapDispatchToProps = { addMessage, setError, clearError, deleteAllMessage };
export default connect(mapStateToProps, mapDispatchToProps)(MessageListApp);
