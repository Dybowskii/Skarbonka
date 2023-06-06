import React from "react";
import piggyImage from "../Images/piggy-bank.png"
function MainPage()
{
    return<div>
        <div className="mainSite-container">
                <div className="mainSite-content">
                <h1>System Skarbonek</h1>
                <h2>Zaloguj się <br/>lub stwórz konto <br/>by poznać szczegóły.</h2>
                <img src={[piggyImage]} alt="Obrazek" width="164" height="164"></img>
                </div>
            </div>
    </div>
}
export default MainPage;