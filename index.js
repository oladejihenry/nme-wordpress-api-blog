const express = require('express')

const app = express()
const port = 5000 

//Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + '/public/js'))

//Template Engine
app.set('views','./src/views')
app.set('view engine', 'ejs')

// Routes
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)

//Listen on port 5000
app.listen(process.env.PORT || 5000, ()=>(console.log(`Listening on port ${port}`)))