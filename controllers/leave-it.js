// require express
const express = require('express')
// create a router
const router = express.Router()

// mount all of the routes on the router
// GET /movies -- least fav movies
router.get('/movies', (req, res) => {
	res.render('loveOrLeave.ejs', {
		feeling: 'leave',
		topic: 'these films',
		items: ['sharknado', 'tank girl', 'avatar last airbender', 'morbeus']
	})
})

// GET /products -- least favorite products
router.get('/products', (req, res) => {
	res.render('loveOrLeave.ejs', {
		feeling: 'leave',
		topic: 'these products',
		items: ['most microsoft products', 'selfie sticks', 'garden air blowers', 'toddler leashes (feel bad for the kids)']
	})
})

// export the router
module.exports = router