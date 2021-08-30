import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Api from '../MessageGenerator'
import { connect } from 'react-redux';
import { addMessage } from '../redux/actions/message';
import { CardMessage } from './CardMessage';

class MessageList extends Component {
  constructor(...args) {
    super(...args)
  }

  api = new Api({
    messageCallback: (message) => {
      this.messageCallback(message)
    },
  });


  componentDidMount() {
    this.api.start()
  };

  messageCallback(message) {
    this.props.addMessage(message);
  };

  renderButton() {
    const isApiStarted = this.api.isStarted()
    return (
      <div id="buttons">
        <Button
          variant="contained"
          onClick={() => {
            if (isApiStarted) {
              this.api.stop()
            } else {
              this.api.start()
            }
            this.forceUpdate()
          }}
        >
          {isApiStarted ? 'Stop Messages' : 'Start Messages'}
        </Button>
        <Button variant="contained">clear</Button>
      </div>
    )
  };

  render() {
    return (
      <>
        <h1>Coding Challenge</h1>
        <hr />
        {this.renderButton()}
        <div id="container">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid container item xs={4} justify="center" direction="column">
              <h2>Error Type 1</h2>
              <small>Count 2</small>
              {
                this.props.messages.messages.map( (msg) =>  msg.priority === 1 && <CardMessage key={msg.message} data={msg} /> )
              }
            </Grid>
            <Grid container item xs={4} justify="center" direction="column">
              <h2>Warning Type 2</h2>
              <small>Count 2</small>
              {
                this.props.messages.messages.map( (msg) =>  msg.priority === 2 && <CardMessage key={msg.message} data={msg} /> )
              }
            </Grid>
            <Grid container item xs={4} justify="center" direction="column">
              <h2>Info Type 3</h2>
              <small>Count 2</small>
              {
                this.props.messages.messages.map( (msg) =>  msg.priority === 3 && <CardMessage key={msg.message} data={msg} /> )
              }
            </Grid>
          </Grid>
        </div>
      </>
    )
  }
};

const mapStateToProps = state => ({ messages: state.message, stopGeneration: state.stopGeneration });
const mapDispatchToProps = { addMessage };
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
