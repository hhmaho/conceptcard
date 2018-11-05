import React from 'react';
import Card from './Card'

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

console.log(getRandomInt(7))

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: 0, done: false, toRedo: false
        }
    }
    render() {
        return (
            <div>
                <button>New card</button>
                <button onClick={() => {
                    this.setState({
                        done: true
                    })
                }
                }>Done</button>
                <button>Redo</button>
                {this.props.cards.map((card) =>
                    <Card definition={card.definition} concept={card.concept} />)}
            </div >
        )
    }
}

export default Quiz