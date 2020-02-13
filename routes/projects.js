var express = require('express');
var router = express.Router();
var fs = require('file-system')

// Get projects page
router.get('/projects', (req, res) => {
	let projectsList = [];
	let projectsDir = 'projects';

	if (fs.existsSync(projectsDir)) {
		let projectDirs = fs.readdirSync(projectsDir)
		projectDirs.forEach(proj => {
			let info = JSON.parse(fs.readFileSync(`${projectsDir}/${proj}/info.json`));

			if (info.hidden === true)
				return

			if (info.desc !== null)
				info.desc = fs.readFileSync(`${projectsDir}/${proj}/${info.desc}`).toString().replace(/\\"/g, '"')

			projectsList.push(info)
		})
		projectsList.sort(function (a, b) {
			return (+(a.year < b.year) || +(a.year === b.year) - 1) ||
				(+(a.month < b.month) || +(a.month === b.month) - 1);
		})
	}

	res.render('projects', { title: 'Projects', projects: JSON.stringify(projectsList) })
})

// Get project details
router.get('/projects/*', (req, res) => {
	var folder = req.url.toString()
	folder = folder.substr(10, folder.length - 10);
	let projectsDir = 'projects';

	if (fs.existsSync(`${projectsDir}/${folder}`)) {
		let info = JSON.parse(fs.readFileSync(`${projectsDir}/${folder}/info.json`));

		if (info.hidden === true)
			res.render('error', { title: 'Error 403', msg: 'Project Hidden 🤫' })

		if (info.desc !== null)
			info.desc = fs.readFileSync(`${projectsDir}/${folder}/${info.desc}`).toString().replace(/\\"/g, '"')

		if (info.image !== null && fs.existsSync(`${projectsDir}/${folder}/${info.image}`)) {
			fs.copyFileSync(`${projectsDir}/${folder}/${info.image}`, `public/images/${info.image}`)
			fs.unlinkSync(`${projectsDir}/${folder}/${info.image}`)
		}

		if (info.image === null) info.image = ""

		res.render('project', { title: folder, project: JSON.stringify(info) })
	} else {
		res.render('error', { title: 'Error 404', msg: 'Project Not Found' })
	}


})

module.exports = router;
