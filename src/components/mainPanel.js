import React, { Component } from 'react';

import styles from "./styles/mainPanel.style.module.css";

import senderImage from "../assets/github.jpg"
import destImage from "../assets/jadi.jpg"

export class MainPanel extends Component {
    constructor(){
        super()
        this.state = {
            inputValue : "",
        }
    }
    inputHandler = (event) => {
        this.setState((prevState) => ({
            inputValue : event.target.value,
        }))
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <div>
                        <img src={senderImage}/>
                        <span>mohammad reza Kaspour</span>
                    </div>
                    <span>Online People : 10</span>
                </div>
                <p className={styles.title}>Node Support Groupe</p>
                <div className={styles.messageBox}>
                    <div className={styles.sendMessage}>
                        <img src={senderImage}/>
                        <p>
                            hello every one good morning , i have a very important question about importing imgs into nodejs is there any one who can help me 
                        </p>
                    </div>
                    <div className={styles.revievemessage}>
                        <img src={destImage}/>
                        <p>
                            good morning guys ...
                        </p>
                    </div>
                </div>
                <div className={styles.sendPanel}>
                    <input placeholder='Type ....' value={this.state.inputValue} onChange={this.inputHandler}/>
                    <button>Send</button>
                </div>
            </div>
        );
    }
}