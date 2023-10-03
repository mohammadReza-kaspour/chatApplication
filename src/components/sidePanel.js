import React, { Component } from 'react';

import styles from "./styles/sidePanel.style.module.css";
import icon1 from "../assets/messageIcon.svg"
import icon2 from "../assets/node.png"
import icon3 from "../assets/react.jpg"
import icon4 from "../assets/Flutter.webp"

export class SidePanel extends Component {
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
                    <img src={icon1}/>
                    <span>Socket.IO Chat</span>
                </div>
                <input  className={styles.search} 
                        placeholder='Search Contacts ....' 
                        value={this.state.inputValue} onChange={this.inputHandler}/>
                <div className={styles.messageList}>
                    <ul className={styles.list}>
                        <li>
                            <img src={icon2}/>
                            <div>
                                <span>Node js</span>
                                <span>Node Support Groupe</span>
                            </div>
                        </li>
                        <li>
                            <img src={icon3}/>
                            <div>
                                <span>React js</span>
                                <span>React Support Groupe</span>
                            </div>
                        </li>
                        <li>
                            <img src={icon4}/>
                            <div>
                                <span>Flutter</span>
                                <span>Flutter Support Groupe</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}