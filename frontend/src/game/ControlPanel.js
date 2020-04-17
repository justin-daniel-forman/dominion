import React from '../../node_modules/react';

// import style sheets
import './ControlPanel.css';

class ControlPanel extends React.Component {

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
                <div id="control-panel-header">Control Panel</div>
                <div id="game-time">{this.state.time}</div>
                <button
                    id="time-button"
                    onClick={() => this.handleButtonPush()}
                >Get time
                </button>
            </div>
        );
    }
}

export default ControlPanel;