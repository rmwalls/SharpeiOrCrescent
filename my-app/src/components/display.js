// Display the images on the page
import React, { Component } from "react";
import data from '../images.json'
class Display extends Component {
    state = {
        test: "monkey",
        data
    }
    componentDidMount() {
        this.setState({
            data: data
        })
    }
    render() {
        return (
            <div className="Display" >
                <header className="App-header" >
                    <h1 className="display-4">Let's Play a Game!</h1>
                    </header>
                <div className="jumbotron" >
                    <p className="lead">Click on the images, score points by not clicking the same image twice</p>
                    <hr />
                    <p>Are they sharpeis or crescent rolls?</p>
                    {
                        this.state.data.map(item => (
                            <img src={item.image} alt="game pic" /> 
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default Display
