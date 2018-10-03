let messagesArray = []; 
let id = 0; 

module.exports = {
    createMessage: (req, res) => {
        let { text, time } = req.body; 
        const newMessage = {
            id, 
            text, 
            time
        }
        id++; 
        messagesArray.push(newMessage); 
        console.log('--- messages', messagesArray); 
        res.json(messagesArray); 
        res.send('🧠'); 
    }, 
    readMessages: (req, res) => {
        res.json(messagesArray); 
        res.send('🚵🏽‍♂️'); 
    }, 
    updateMessage: (req, res) => {
        const messageId = req.params.id; 
        const messageIndex = messagesArray.findIndex(message => message.id === parseInt(messageId)); 
        if (messageIndex === -1) {
            res.status(404).send(`This message, with an id of ${messageId} does not exist!`); 
        } else {
            messagesArray[messageIndex] = { ...req.body, id: messagesArray[messageIndex].id }; 
            res.json(messagesArray); 
            res.send('🇺🇸'); 
        }
    }, 
    deleteMessage: (req, res) => {
        const messageId = req.params.id; 
        const messageIndex = messagesArray.findIndex(message => message.id === parseInt(messageId));
        if (messageIndex === -1) {
            res.status(404).send(`This message, with an id of ${messageId} does not exist!`); 
        } else {
            messagesArray.splice(messageIndex, 1); 
            res.json(messagesArray); 
            res.send('💵'); 
        }
    }, 
}