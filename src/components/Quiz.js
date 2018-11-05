import React from "react";
import Card from "./Card";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(7));

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: props.cards,
      toRedo: [9],
      done: []
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              todo: this.props.cards.length - 1
            });
            console.log(this.props.cards);
          }}
        >
          New card
        </button>
        <button
          onClick={() => {
            this.setState({
              toRedo: this.state.toRedo
            });
            console.log(this.state.toRedo);
          }}
        >
          Redo
        </button>
        <button
          onClick={() => {
            //
            if (this.state.done) {
              return console.log("done");
            }
          }}
        >
          Done
        </button>

        {/* {this.props.cards.map(card => (
          <Card
            key={card.concept}
            definition={card.definition}
            concept={card.concept}
          />
        ))} */}
      </div>
    );
  }
}

export default Quiz;
