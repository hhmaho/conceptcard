import React from "react";

class RoundOver extends React.Component {
  render() {
    return (
      <div>
        <h4>No more cards!</h4>
        <button onClick={this.props.onShuffle}>Shuffle remaining cards</button>
      </div>
    );
  }
}

export default RoundOver;
