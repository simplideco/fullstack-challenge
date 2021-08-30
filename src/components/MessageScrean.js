import React from 'react';

export function MessageScreen() {

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

  <>
    <div>
      {this.renderButton()}
    </div>
  </>

};