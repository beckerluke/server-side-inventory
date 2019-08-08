const express = require('express'); 
const app = express(); 
const PORT = 5000; 

const inventoryList = require('./modules/inventory'); 

app.use(express.static('server/public')); 

app.listen(PORT, () => {
    console.log('Server is On!');
});

app.get('/inventory', (req, res) => {
    res.send(inventoryList);
});


