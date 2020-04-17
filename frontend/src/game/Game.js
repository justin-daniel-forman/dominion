import React from '../../node_modules/react';

// import style sheets
import './Game.css';

// import components
import GameBoard from './GameBoard';
import ControlPanel from './ControlPanel';

class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 4,
    };

  }

  render() {

    return (
      <div id="game">
        <div id="game-board-container">
          <GameBoard />
        </div>
        <div id="control-panel-container">
          <ControlPanel />
        </div>
      </div>
    );
  }
}

export default Game;
