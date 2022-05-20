// packages
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')

// app config
const app = express()
const PORT = 3001
app.set('view engine', 'ejs')

// middlewares
app.use(ejsLayouts)

// routes
// GET / -- app homepage
app.get('/', (req, res) => {
	res.render('index.ejs')
})

// controllers (middleware syntax)
// app.use('url pattern to prefix all routes with', the controller file)
app.use('/love-it', require('./controllers/love-it'))
app.use('/leave-it', require('./controllers/leave-it'))

// listen
app.listen(PORT, console.log(`expressing on port ${PORT}`))


