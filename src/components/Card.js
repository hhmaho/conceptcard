import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDefinition: false
    };
  }

  render() {
    // console.log(this.state)

    if (this.state.showDefinition) {
      return (
        <div>
          <p>{this.props.concept}</p>
          <p>{this.props.definition}</p>
          <button onClick={this.props.onOk}>Ok</button>
          <button onClick={this.props.onNok}>Niet ok</button>
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

export default Card;
