import React from 'react';

// const Card = ({ card }) => (
//     <div>
//         <p>Concept = {card.concept}</p>
//         <p>Definitie = {card.definition}</p>
//         <button>Klopt</button>
//         <button>Fout</button>
//     </div>
// )

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDefinition: false
        }
    }
    render() {
        console.log(this.state)

        if (this.state.showDefinition === true) {
            return (
                <div>
                    <p>{this.props.definition}</p>
                    <button onClick={() => {
                        this.setState({
                            showDefinition: false
                        })
                    }} >Ok</button>
                    <button onClick={() => {
                        this.setState({
                            showDefinition: true
                        })
                    }} >Niet ok</button>
                    {/* onClick Fout = continue(true) */}
                </div>
            )
        } else {
            return (
                <div>
                    <p>{this.props.concept}</p>
                    <button onClick={() => {
                        this.setState({
                            showDefinition: true
                        })
                    }
                    }> show</button >
                </div >
            )
        }

    }
}

export default Card