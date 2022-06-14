const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./src/db')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./src/graphql/schema')
dotenv.config();
const app = express();
connectDB()

//const port = 3000;
app.set('view engine', 'ejs');

app.use("/graphql", graphqlHTTP({
    schema, 
    graphiql: true
}))

app.get('/', (req, res)=>{
    console.log('Hello, Foxes. Welcome to Quizly');
    res.send('Hello, Foxes. Welcome to Quizly');
});

app.listen(process.env.PORT, ()=>{
    console.log(`Quizly is running on PORT ${process.env.PORT}!`)
});



/*
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
*/

