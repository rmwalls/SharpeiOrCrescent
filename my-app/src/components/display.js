// Display the images on the page
import React, { Component } from "react";
import data from '../images.json'
class Display extends Component {
    state = {
        data,
        currentScore: 0,
        topScore: 0
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
                    </header>
                <div className="jumbotron" >
                    <p className="lead">Click on the images. Score points by not clicking the same image twice.</p>
                    <hr />
                    <h2>Are they sharpeis or crescent rolls?</h2>
                    <div class="grid-container">
                    {
                        this.state.data.map(item => (
                            <div class="grid-item">
                                <img src={item.image}  alt="game pic" /> 
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        )
    }
}
export default Display
