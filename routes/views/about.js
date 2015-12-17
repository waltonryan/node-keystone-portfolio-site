var keystone = require('keystone'),
		SiteInfo = keystone.list('SiteInfo');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'about';

	// Load siteinfo info
	view.on('init', function (next) {

		var q = SiteInfo.model.find({}).populate('profileImage');

		q.exec(function (err, result) {
			locals.siteinfo = result;
			next(err);
		});

	});

	// Render the view
	view.render('about', {layout: 'main'});

};
