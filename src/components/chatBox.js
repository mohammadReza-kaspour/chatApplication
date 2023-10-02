import React, { Component } from 'react';
import { v4 } from 'uuid';


import styles from "./styles/chatBox.style.module.css";
import { socketHandler } from '../Socket/client';

export class ChatBox extends Component {
    #chats = [];
    constructor(){
        super()
        this.state = {
            inputValue : "",
            socketReceiver : "",
        }
    }

    inputValueController = (event) => {
        this.setState((prevState) => ({
            inputValue : event.target.value,
        }));
    }
    clickHandler = async () => {
        const socketData = await socketHandler(this.state.inputValue)
        this.setState((prevState) => ({
            inputValue : "",
            socketReceiver : socketData,
        }));
        this.#chats.push(socketData)
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.messageBox}>
                    {this.#chats.map(item => <p key={v4()}>{item}</p>)}
                </div>
                <div className={styles.panel}>
                    <input type='text' value={this.state.inputValue} onChange={this.inputValueController} placeholder='type ....'/>
                    <button onClick={async () => await this.clickHandler()}>Send</button>
                </div>
            </div>
        );
    }
}