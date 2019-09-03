// Display the images on the page
import React, { Component } from "react";
import data from '../images.json'
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
    render() {
        return (
            <div className="Display" >
                <header className="App-header" >
                    <h1 id="site_title">Let's Play a Game!</h1>
                    <h2 id="site_title">Click on the images. <br></br>Score points by not clicking the same image twice.</h2>
                    <p className="label">(Are they sharpeis or crescent rolls?)</p>
                </header>
                {console.log("currentScore = " + this.state.currentScore)}
                <div className="gameScore">
                    <h3 className="score">Your Score =  {this.state.currentScore}</h3>
                    <h3 className="status">{this.state.status}</h3>
                </div>
                <div className="grid-container">
                    {
                        this.state.data.map(item => (
                            <div className="grid-item">
                                <img src={item.image} id={item.id} alt="game pic" onClick={() => this.handleButtonClicks(item.id)} />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    //shuffle the cards in the browser when clicked
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
}
export default Display


// need to make onClick - handleButtonClicks to do the logic
    //shuffle images
    //check if clicked before
    //deal with score
    // keep going or start over?
        //play again? 
