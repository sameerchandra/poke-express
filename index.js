const express = require('express')
const path = require('path')
const axios = require('axios')

const app = express()

app.set('view engine','hbs')

app.use(express.static(path.join(__dirname+"/public")))

console.log(__dirname)


app.get('/',(req,res) => {
    res.render("index")
})

app.get('/list',(req,res) => {
    res.render('list',{
        pokemon:"Bulbasaur"
    })
})

app.get('/pokemon',(req,res) =>{

    axios.get(`https://pokeapi.co/api/v2/pokemon/${req.query.pokemon}`)
    .then(c => {
        console.log(c.data)
    res.render("pokemon",{pokemon:c.data.name,moves:c.data.moves,image:c.data.sprites.other['official-artwork']['front_default']})

    })



})

app.get('/about',(req,res) => {
    res.send("About")
})



app.listen(3000,() => {
    console.log("Started Listening on 3000")
})