// This file primarily displays the images and components on the page
import React, { Component } from "react";
import data from '../images.json';
import Footer from "./footer";
import Header from "./header";
import Score from "./score";

class Display extends Component {
    state = {
        data,
        clickedIds: [],
        currentScore: 0,
        status: ""
    }
    componentDidMount() {
        this.setState({
            data: data,
            clickedIds: [],
            currentScore: 0,
            status: ""
        })
    }
    handleButtonClicks = id => {
        let clickedIds = this.state.clickedIds;
 
        if (clickedIds.includes(id)) {
            this.setState({ clickedIds: [], currentScore: 0, status: "Game Over! You lost. Click to play again!" });
            return;
        } else {
            clickedIds.push(id)

            if (clickedIds.length === 12) {
                this.setState({ currentScore: 12, status: "Wow! You Won! Click to play again!", clickedIds: [] });
                console.log('Winner');
                return;
            } else {
            this.setState({ data, clickedIds, currentScore: clickedIds.length, status: " " });

            for (let i = data.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [data[i], data[j]] = [data[j], data[i]];
            }}
        }
    }
    render() {
        return (
            <div className="Display" >
                <Header />
                {console.log("currentScore = " + this.state.currentScore)}
                <Score {...this.state}/>
                <div className="grid-container">
                    {   //map over the images array and display each in a grid cell. When one is clicked, handle it
                        this.state.data.map(item => (  
                            <div className="grid-item">
                                <img src={item.image} id={item.id} alt="game pic" onClick={() => this.handleButtonClicks(item.id)} />
                            </div>
                        ))
                    }
                </div>
               <Footer />
            </div>
        )
    }
}
export default Display
