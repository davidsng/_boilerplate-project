const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const dbuser = process.env.SCOREBOARD_DB_USER
const dbpassword = process.env.SCOREBOARD_DB_PASSWORD
const dburl = 'mongodb://' + dbuser + ':' + dbpassword + '@ds059644.mongolab.com:59644/playground'
mongoose.connect(dburl)
const cors = require('cors')
const jwt = require('express-jwt');

var jwtCheck = jwt({
  secret: new Buffer('N27klNT0hPoZn-GeaPr2UDnvK58M_M5hVBKdZVUI1HA5Cs1BpB-kQRWP5KMs-Oyh', 'base64'),
  audience: 'rkmU1erjb9T0TGZD3Jj0zTb0pbpjXZdQ'
});


/*
var Score = mongoose.model('Score', {
  player: String,
  score: Number
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/scores', jwtCheck)


app.get('/scores', (req, res) => {
  res.json(scoreboard)
})

app.get('/scores/:id', (req, res) => {
  const score = scoreboard[req.params.id]
  res.json(score)
})

// create
app.post('/scores', (req, res) => {
  const score = new Score(req.body)
  score.save(err => {
    if (err) return console.error(err)
    console.log('New score added')
    res.json(req.body)
  })
  // scoreboard.push(req.body)
})

// update
app.put('/scores', (req, res) => {
  const update = req.body
  Score.findOneAndUpdate({player: update.player}, update, err => {
    if (err) console.error(err)
    res.json(req.body)
  })
})

// delete
app.delete('/scores/:playerName', (req, res) => {
  Score.findOneAndRemove({player: req.params.playerName}, err => {
    if (err) console.error(err)
    res.send('Deleted ' + req.params.playerName)
  })
})

module.exports = app
*/
