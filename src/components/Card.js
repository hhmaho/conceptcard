import React from "react";
import { connect } from "react-redux";
import { cardOk, cardNok } from "../store";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDefinition: false
    };
  }

  render() {
    console.log(this.props);

    if (this.state.showDefinition) {
      return (
        <div>
          <p>{this.props.concept}</p>
          <p id="answer">{this.props.definition}</p>
          <button className="buttonOk" onClick={this.props.onOk}>
            Ok
          </button>
          <button className="buttonNok" onClick={this.props.onNok}>
            Niet ok
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <p>{this.props.concept}</p>
          <button
            onClick={() => {
              this.setState({
                showDefinition: true
              });
            }}
          >
            {" "}
            show
          </button>
        </div>
      );
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOk: () => {
      dispatch(cardOk());
    },
    onNok: () => {
      dispatch(cardNok());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Card);
