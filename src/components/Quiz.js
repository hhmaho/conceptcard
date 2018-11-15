import React from "react";
import Card from "./Card";
import RoundOver from "./RoundOver";
import GameOver from "./GameOver";
import { connect } from "react-redux";

class Quiz extends React.Component {
  render() {
    console.log(this.props);

    if (this.props.todo.length > 0) {
      const card = this.props.todo[0];
      return (
        <Card
          key={card.concept}
          concept={card.concept}
          definition={card.definition}
        />
      );
    } else if (this.props.toRedo.length > 0) {
      return <RoundOver />;
    } else {
      return <GameOver />;
    }
  }
}

export default connect(state => ({
  todo: state.todo,
  toRedo: state.toRedo,
  done: state.done
}))(Quiz);
