var express = require('express');
var router = express.Router();

// Serve Home
router.get('/contact', (req, res) => {
	res.redirect('mailto:jnxtbrasil@gmail.com?subject=👋%20Hey%20Jacob!')
})

module.exports = router;