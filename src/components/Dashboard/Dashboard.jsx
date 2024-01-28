import React from "react";
import Play from "./../assets/button_play.png";
import "./Dashboard.css";

function Dashboard  () {
    return (
        <section className="dashboardContainer">
            <div className="gameBlock">
                <p>The most popular game is <br />
                    <b>Speak IT</b>
                </p>
                <img className="btnPlay" src={Play} alt="play" />
                <button className="btnRandom">Play random game</button>
            </div>
            <div className="pointsBlock">
                <span>Common experience</span>
                <h3>238 points</h3>
            </div>
            <div className="levelBlock">
                <span>level</span>
                <h3>7 level</h3>
                <p>Learn 750 new words in one course</p>
            </div>
        </section>
    );
}

export default Dashboard;