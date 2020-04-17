import React from '../../node_modules/react';

// import style sheets
import './Hand.css';

// import components
import Card from './Card'

class Hand extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: 3,
        };

        this.handleAddCardClick = this.handleAddCardClick.bind(this);
        this.handleRemoveCardClick = this.handleRemoveCardClick.bind(this);
    }

    handleAddCardClick() {
        this.setState({ cards: this.state.cards + 1 });
    }
    handleRemoveCardClick() {
        if (this.state.cards > 0)
            this.setState({ cards: this.state.cards - 1 });
    }

    render() {

        const cardComponents = [];

        for (var i = 0; i < this.state.cards; i++) {
            cardComponents.push(<Card faceUp={true} />)
        }



        const handStyle = {
            display: 'grid',
            gridTemplateColumns: 'repeat(' + this.state.cards + ', 1fr)',
        };

        const addButtonStyle = {
            position: 'absolute',
            marginTop: '-30px',
        };
        const removeButtonStyle = {
            position: 'absolute',
            marginTop: '-30px',
            marginLeft: '100px',
        };

        const containerStyle = {
            height: '100%',
        };

        return (
            <div style={containerStyle}>
                <button onClick={this.handleAddCardClick} style={addButtonStyle}>Add Card</button>
                <button onClick={this.handleRemoveCardClick} style={removeButtonStyle}>Remove Card</button>

                <div id="hand" style={handStyle}>
                    {cardComponents}
                </div >
            </div>
        );
    }
}

export default Hand;
