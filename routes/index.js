const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies */
router.get('/movies', (req, res, next) => {
	Movie.find()
		.then((dbMovies) => {
			res.render('movies', { movies: dbMovies })
		})
		.catch((e) => next(e));
})
module.exports = router;
