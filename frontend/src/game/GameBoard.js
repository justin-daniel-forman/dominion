import React from '../../node_modules/react';
import './GameBoard.css';

class GameBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        };
    }

    handleButtonPush() {
        fetch('/time').then(res => res.json()).then(data => {
            this.setState({ time: data.time });
        });
    }

    render() {
        return (
            <div>

                <div id="game-board-header">Game Board</div>
                <div id="game-time">{this.state.time}</div>

                <div>
                    <button
                        id="game-board-button"
                        onClick={() => this.handleButtonPush()}
                    >Get time
                    </button>
                </div>

            </div>
        );
    }
}

export default GameBoard;