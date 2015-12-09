var keystone = require('keystone'),
		Project = keystone.list('Project');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);

	// Render the view
	Project.model.find({}, function(err, project) {
		if (err) throw err;
		// all the things
		res.render('portfolio', {layout: 'main', project: project});
	}).populate('category');
	
};
