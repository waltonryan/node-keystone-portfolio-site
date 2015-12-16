var keystone = require('keystone'),
		HomePage = keystone.list('HomePage');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'about';

	// Load homepage info
	view.on('init', function (next) {

		var q = HomePage.model.find({}).populate('profileImage');

		q.exec(function (err, result) {
			locals.homepage = result;
			next(err);
		});

	});

	// Render the view
	view.render('about', {layout: 'main'});

};
