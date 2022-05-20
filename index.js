// packages
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const res = require('express/lib/response')

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

// GET /foods -- favorite foods
app.get('/foods', (req, res) => {
	res.render('loveOrLeave.ejs', {
		feeling: 'Love',
		topic: 'this food',
		items: ['mango', 'shepards pie', 'ceviche', 'crab legs', 'crawfish and shrimp fried rice', 'liver kabab', 'stuffed cabbage']
	})
})
// GET /animals -- favorite animals

// GET /movies -- least fav movies

// GET /products -- least favorite products

// listen
app.listen(PORT, console.log(`expressing on port ${PORT}`))


