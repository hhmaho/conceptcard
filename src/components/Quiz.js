import React from "react";
import Card from "./Card";
import RoundOver from "./RoundOver";
import GameOver from "./GameOver";

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: props.cards,
      toRedo: [],
      done: []
    };

    this.onOk = this.onOk.bind(this);
    this.onNok = this.onNok.bind(this);
  }

  onOk() {
    //destructuring assignment
    const [topCard, ...restTodo] = this.state.todo;
    this.setState({
      todo: restTodo,
      done: this.state.done.concat(topCard)
    });
  }

  onNok() {
    console.log("state", this.state);
    const [topCard, ...restTodo] = this.state.todo;
    this.setState({
      todo: restTodo,
      toRedo: this.state.toRedo.concat(topCard)
    });
  }

  render() {
    if (this.state.todo.length > 0) {
      const card = this.state.todo[0];
      return (
        <Card
          key={card.concept}
          concept={card.concept}
          definition={card.definition}
          onOk={this.onOk}
          onNok={this.onNok}
        />
      );
    } else if (this.state.toRedo.length > 0) {
      return <RoundOver />;
    } else {
      return <GameOver />;
    }
  }
}

export default Quiz;
