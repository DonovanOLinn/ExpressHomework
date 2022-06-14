const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.listen(port, ()=>{
    console.log(`Hello Foxes!! THis app is listening on port: ${port}`)
})




const characters = {
    normal: 'Frank Reynolds',
    art: 'Ongo Gablogian'
}


app.get('/', (req, res)=>{
    res.render('pages/home');
});

app.get('/login', (req, res)=>{
    res.render('pages/login');
});

app.get('/profile', (req, res)=>{
    res.render('pages/profile');
});

app.get('/register', (req, res)=>{
    res.render('pages/register');
});

app.get('/user', (req, res)=>{
    res.render('pages/user');
});