const express = require('express');
const app = express();
app.use(express.static('public'));
const path = require("path");
const port= 3000;

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));


app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

