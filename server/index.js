const express = require('express'); 
const bodyParser = require('body-parser'); 
const messageController = require('../controllers/messages_controller'); 

const app = express(); 
app.use(bodyParser.json()); 

app.use(express.static(__dirname + '/../public/build'));

app.get('/api/messages', messageController.readMessages); 
app.post('/api/messages', messageController.createMessage); 
app.put('/api/messages/:id', messageController.updateMessage); 
app.delete('/api/messages/:id', messageController.deleteMessage); 

const port = 3001; 
app.listen(port, () => {
    console.log('HELLO WORLD 🏆');  
    console.log(`Listening from port ${port} ⛷ 🚀`); 
}); 