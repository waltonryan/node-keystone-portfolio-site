var keystone = require('keystone'),
		SiteInfo = keystone.list('SiteInfo'),
		ProjectCategory = keystone.list('ProjectCategory'),
		Project = keystone.list('Project'),
		Skill = keystone.list('Skill');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'projects';

	// Load SiteInfo info
	view.on('init', function (next) {

		var q = SiteInfo.model.find({}).populate('mainImage profileImage');

		q.exec(function (err, result) {
			locals.siteinfo = result;
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

	// Load skills
	view.on('init', function (next) {

		var q = Skill.model.find({}).sort('priority').populate('image');

		q.exec(function (err, result) {
			locals.skills = result;
			next(err);
		});

	});

	// Render the view
	view.render('portfolio', {layout: 'main'});

};
