var express = require('express');
var router = express.Router();

// Serve Home
router.get('/', (req, res) => {
	res.render('index')
})

module.exports = router;
