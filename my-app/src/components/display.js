// Display the images on the page
import React, { Component } from "react";
import data from '../images.json'
class Display extends Component {
    state = {
        data,
        clickedIds: [],
        currentScore: 0,
        status: " "
    }
    // componentDidMount() {
    //     this.setState({
    //         data: data
    //     })
    // }
    render() {
        return (
            <div className="Display" >
                <header className="App-header" >
                    <h1 className="display-4">Let's Play a Game!</h1>
                    <h2>Click on the images. <br></br>Score points by not clicking the same image twice.</h2>
                    <p className="label">(Are they sharpeis or crescent rolls?)</p>
                </header>
                
                <div className="gameScore">
                    <h3 className="score">Your Score =  {this.currentScore}</h3>
                    <h3 className="status">{this.status}</h3>
                </div>
                <div class="grid-container">
                    {
                        this.state.data.map(item => (
                            <div class="grid-item">
                                <img src={item.image} id={this.id} alt="game pic" onClick={() => this.shuffleCard(this.id)} className='shuffleCard' />
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    //shuffle the cards in the browser when clicked
    shuffleCard = id => {
        let clickedIds = this.state.clickedIds;

        if (clickedIds.includes(id)) {
            this.setState({ clickedIds: [], currentScore: 0, status: "Game Over! You lost. Click to play again!" });
            return;
        } else {
            clickedIds.push(id)

            if (clickedIds.length === 12) {
                this.setState({ score: 12, status: "Wow! You Won! Click to play again!", clickedIds: [] });
                console.log('Winner');
                return;
            }
            this.setState({ data, clickedIds, currentScore: clickedIds.length, status: " " });

            for (let i = data.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [data[i], data[j]] = [data[j], data[i]];
            }
        }
    }
}
export default Display


// need to make onClick - handleButtonClick to do the logic
    //shuffle images
    //check if clicked before
    //deal with score
    // keep going or start over?
        //play again? 
