const socketIOClient =require("socket.io-client");

export const socketHandler = (valueToSend = "") => new Promise((resolve , reject) => {
    try {    
        if(valueToSend.trim().length <= 0) throw new Error("ورودی نمیتواند خالی باشد");
        const socket = socketIOClient("http://localhost:3500");
        socket.on("connect" , (data) => {
            socket.emit("welcome" , valueToSend);
            socket.on("welcome-client" , (data) => {
                resolve(data);
            })
            socket.on("broad" , (data) => {
                resolve(data);
            })
        });

    } catch (error) {
        alert(error.message);
    }
});