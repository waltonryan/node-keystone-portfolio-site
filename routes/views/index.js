var keystone = require('keystone'),
		ProjectItem = keystone.list('ProjectItem'),
		Project = keystone.list('Project');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// // Load projects
	// view.on('init', function (next) {
	//
	// 	var q = Project.model.find({}).populate('category');
	//
	// 	q.exec(function (err, result) {
	// 		locals.projects = result;
	// 		next(err);
	// 	});
	//
	// });
	//
	// // Load project items
	// view.on('init', function (next) {
	//
	// 	var q = ProjectItem.model.find({}).populate('stage');
	//
	// 	q.exec(function (err, result) {
	// 		locals.projectitems = result;
	// 		next(err);
	// 	});
	//
	// });

	// Render the view
	view.render('index');

};
