import React from '../../node_modules/react';

// import style sheets
import './GameBoard.css';

// import components
import Hand from './Hand';
import Discard from './Discard';
import Deck from './Deck';
import ResourceTracker from './ResourceTracker';
import BaseSupply from './BaseSupply';
import KingdomSupply from './KingdomSupply';

class GameBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    render() {
        return (
            <div id="game-board">

                <div id="game-board-grid">

                    <div id="base-supply-container">
                        <p className="preview-text">Base Supply</p>
                        <BaseSupply />
                    </div>

                    <div id="kingdom-supply-container">
                        <p className="preview-text">Kingdom Supply</p>
                        <KingdomSupply />
                    </div>

                    <div id="resource-tracker-container">
                        <p className="preview-text">Resource Tracker</p>
                        <ResourceTracker />
                    </div>

                    <div id="play-area-container">
                        <p className="preview-text">Play Area</p>
                    </div>

                    <div id="deck-container">
                        <p className="preview-text">Deck</p>
                        <Deck />
                    </div>

                    <div id="discard-container">
                        <p className="preview-text">Discard</p>
                        <Discard />
                    </div>

                    <div id="hand-container">
                        <p className="preview-text">Hand</p>
                        <Hand />
                    </div>

                </div>
            </div>
        );
    }
}

export default GameBoard;