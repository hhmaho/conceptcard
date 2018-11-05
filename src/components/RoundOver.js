import React from "react";

class RoundOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h4>You made it!</h4>
        <button>Shuffle remaining cards</button>
      </div>
    );
  }
}

export default RoundOver;
