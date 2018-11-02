const express         = require('express')
const app             = express()
const bodyParser      = require('body-parser')
const user            = require('./router/index')
const PORT            = 3000
const mongoose        = require('mongoose')
mongoose.connect('mongodb://localhost/dhanasekar_test')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/checking', (req,resp)=>{
  resp.json({
    "Tutorial":"Dhanasekar checking the application"
  })
})
app.use('/user',user)
app.listen(PORT,()=>{
  console.log('The Server is running ',PORT)
})
