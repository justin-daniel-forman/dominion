import React from '../../node_modules/react';
import './ControlPanel.css';

class ControlPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    render() {
        return (
            <div>
                <div id="control-panel-header">Control Panel</div>
            </div>
        );
    }
}

export default ControlPanel;