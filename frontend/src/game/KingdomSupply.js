import React from 'react';

// import style sheets
import './KingdomSupply.css';

// import components
import Card from './Card';


class KingdomSupply extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div id="kingdom-supply" >
                <Card faceUp={true}></Card>
                <Card faceUp={true}></Card>
                <Card faceUp={true}></Card>
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

export default KingdomSupply;
