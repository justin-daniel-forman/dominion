import React from '../../node_modules/react';

// import style sheets
import './ResourceTracker.css';

// import components


class ResourceTracker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            actions: 1,
            buys: 2,
            coins: 5,
        };
    }

    render() {
        return (
            <div id="resource-tracker" >
                <p className="resource-type">Actions: {this.state.actions}</p>
                <p className="resource-type">Buys: {this.state.buys}</p>
                <p className="resource-type">Coins: {this.state.coins}</p>
            </div >
        );
    }
}

export default ResourceTracker;
