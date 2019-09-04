// This file holds the page header stateless component
import React from "react";

function Header() {
    return (
        <header className="App-header" >
            <h1 id="site_title">Let's Play a Game!</h1>
            <h2 id="site_title">Click on the images. <br></br>Score points by not clicking the same image twice.</h2>
            <p className="label">(Are they sharpeis or crescent rolls?)</p>
        </header>
    )
}
export default Header;