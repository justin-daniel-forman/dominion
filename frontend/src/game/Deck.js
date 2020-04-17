import React from '../../node_modules/react';

// import style sheets
import './Deck.css';

// import components
import Card from './Card'

class Deck extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: 5,
        };
    }

    render() {
        if (this.state.cards > 0)
            return (
                <div id="deck" >
                    <Card faceUp={false} />
                </div >
            );
    }
}

export default Deck;
