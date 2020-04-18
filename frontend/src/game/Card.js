import React from '../../node_modules/react';

// import style sheets
import './Card.css';

// import images
import ace_spades from '../images/ace_spades.png';
import face_down_card from '../images/face_down_card.png';

class Card extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };

    }

    render() {
        if (this.props.faceUp)
            return (
                <div className="card">
                    <img src={ace_spades} alt="Ace of Spades" />
                </div>
            );
        else
            return (
                <div className="card">
                    <img src={face_down_card} alt="Face down card" />
                </div>
            );
    }
}

export default Card;
