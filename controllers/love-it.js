// import express
const express = require('express')
// create an express router
const router = express.Router()

// mount routes on the router
// GET /foods -- favorite foods
router.get('/foods', (req, res) => {
	res.render('loveOrLeave.ejs', {
		feeling: 'Love',
		topic: 'this food',
		items: ['mango', 'shepards pie', 'ceviche', 'crab legs', 'crawfish and shrimp fried rice', 'liver kabab', 'stuffed cabbage']
	})
})

// GET /animals -- favorite animals
router.get('/animals', (req, res) => {
	res.render('loveOrLeave.ejs', {
		feeling: 'Love',
		topic: 'these amnimals',
		items: ['henryetta', 'cats']
	})
})

// export the router
module.exports = router