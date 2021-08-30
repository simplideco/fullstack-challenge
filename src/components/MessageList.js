import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Api from '../Api'
import { connect } from 'react-redux';
import { addMessage } from '../redux/actions/message';

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
    console.log(this.props.messages);
  };

  renderButton() {
    const isApiStarted = this.api.isStarted()
    return (
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
    )
  };

  render() {
    return (
      <div>
        {this.renderButton()}
      </div>
    )
  }
};

const mapStateToProps = state => ({messages: state.message, stopGeneration: state.stopGeneration }); 
const mapDispatchToProps = { addMessage };
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
