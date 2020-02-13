var express = require('express');
var router = express.Router();

// Get resume
router.get('/resume', (req, res) => {
	res.redirect('https://docs.google.com/document/d/1X_CP9Zmda15hP-e6qjhiaCeNaXBY_qXZg-zn0xSDWiY/export?format=pdf')
})

module.exports = router;