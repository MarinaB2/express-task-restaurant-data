const express = require('express');
const app = express();
const { PORT = 3000 } = process.env;
const path = require('path');


app.use('/assets', express.static(path.join(__dirname, 'public', 'static')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/data', (req, res) => {
    return res.sendFile(path.join(__dirname, 'data.json'));
    })


app.get('/restaurants', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public', 'restaurant.html'));
    
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}....`));

