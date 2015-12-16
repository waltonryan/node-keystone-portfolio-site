var keystone = require('keystone'),
		HomePage = keystone.list('HomePage'),
		ProjectCategory = keystone.list('ProjectCategory'),
		Project = keystone.list('Project');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'projects';

	// Load homepage info
	view.on('init', function (next) {

		var q = HomePage.model.find({}).populate('mainImage');

		q.exec(function (err, result) {
			locals.homepage = result;
			next(err);
		});

	});

	// Load filters
	view.on('init', function (next) {

		var q = ProjectCategory.model.find({});

		q.exec(function (err, result) {
			locals.filters = result;
			next(err);
		});

	});

	// Load projects
	view.on('init', function (next) {

		var q = Project.model.find({}).sort('priority').populate('projectCategory thumbnailImage');

		q.exec(function (err, result) {
			locals.project = result;
			next(err);
		});

	});

	// Render the view
	view.render('portfolio', {layout: 'main'});




	// // Render the view
	// Project.model.find({}, function(err, project) {
	// 	if (err) throw err;
	// 	// all the things
	// 	res.render('portfolio', {layout: 'main', project: project});
	// }).sort('priority').populate('projectCategory thumbnailImage');

};
