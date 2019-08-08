const express = require('express'); 
const app = express(); 
const PORT = 5000; 

const inventoryList = require('./modules/inventory'); 
const bodyParser = require('body-parser');

app.use(express.static('server/public')); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('Server is On!');
});

app.get('/inventory', (req, res) => {
    res.send(inventoryList);
});

app.post('/inventory', (req, res) => {
    const newInventory = req.body;
    inventoryList.push(newInventory);
    res.send('Received newInventory')
});
