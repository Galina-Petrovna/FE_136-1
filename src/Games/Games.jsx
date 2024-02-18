import React from "react";
import style from "./Games.module.css";
import { NavLink } from "react-router-dom";

const Games = () => {

    const GAMES = [
        {path: 'check-it', name: 'Check correct word', description: "Check correct word"},
        {path: 'write-it', name: 'Write correct word', description: "Write correct word"},
        {path: 'put-it', name: 'Put correct word', description: "Put correct word"},
        {path: 'guess-it', name: 'Guess correct word', description: "Guess correct word"},
        {path: 'sprint-it', name: 'Sprint correct word', description: "Sprint correct word"},
        {path: 'select-it', name: 'Select correct word', description: "Select correct word"},
        {path: 'remember-it', name: 'Remember correct word', description: "Remember correct word"},
        {path: 'check-it', name: 'Check correct word', description: "Check correct word"},
        {path: 'sprint-it', name: 'Sprint correct word', description: "Sprint correct word"},

    ]

    return (
        <section className={style.gameContainer}>
            {GAMES.map((games, index) => (
                <NavLink key={index} to={games.path}>
                    <div className={style.gameBlock}>
                        <div>
                            <h2>{games.name}</h2>
                            <p>{games.description}</p>
                        </div>
                    </div>
                </NavLink>
            ))}
        </section>
    )
}

export default Games;