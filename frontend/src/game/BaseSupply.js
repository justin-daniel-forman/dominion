import React from 'react';

// import style sheets
import './BaseSupply.css';

// import components
import Card from './Card';

class BaseSupply extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div id="base-supply" >
                <Card faceUp={true}></Card>
                <Card faceUp={true}></Card>
                <Card faceUp={true}></Card>
                <Card faceUp={true}></Card>
                <Card faceUp={true}></Card>
                <Card faceUp={true}></Card>
                <Card faceUp={true}></Card>
            </div >
        );
    }
}

export default BaseSupply;
