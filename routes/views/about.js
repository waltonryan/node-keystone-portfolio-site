var keystone = require('keystone'),
		About = keystone.list('About');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);

	// Render the view
	About.model.find({}, function(err, about) {
		if (err) throw err;
		// all the things
		res.render('about', {layout: 'main', about: about});
	}).populate('image');

};
