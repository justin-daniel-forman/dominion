import React from '../../node_modules/react';
import ReactDOM from '../../node_modules/react-dom';

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

        this.handRef = React.createRef();

        this.handleAddCardClick = this.handleAddCardClick.bind(this);
        this.handleRemoveCardClick = this.handleRemoveCardClick.bind(this);
    }

    componentDidMount() {
        this.handWidth = this.handRef.current.clientWidth;
        console.log(this.handWidth);
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

        // only use 80% of handWidth as we want left edge of last card to not exceed hand width
        const leftStep = (this.handWidth * 0.8) / (this.state.cards + 1)

        for (var i = 0; i < this.state.cards; i++) {
            var leftIndent = (i + 1) * leftStep;
            var handCardContainerStyle = {
                left: leftIndent.toString() + 'px',
            };
            cardComponents.push(
                <div className="hand-card-container" style={handCardContainerStyle}>
                    <Card faceUp={true} />
                </div>)
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

                <div id="hand" ref={this.handRef} style={handStyle}>
                    {cardComponents}
                </div >
            </div>
        );
    }
}

export default Hand;
