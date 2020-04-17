import React from '../../node_modules/react';

// import style sheets
import './Discard.css';

// import components
import Card from './Card'

class Discard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            empty: false,
        };
    }

    render() {
        if (!this.state.empty)
            return (
                <div id="discard" >
                    <Card faceUp={true} />
                </div >
            );
    }
}

export default Discard;
