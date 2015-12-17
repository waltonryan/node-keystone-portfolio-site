var keystone = require('keystone'),
		SiteInfo = keystone.list('SiteInfo'),
		ProjectItem = keystone.list('ProjectItem'),
		ObjectId = require('mongodb').ObjectID;

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Load SiteInfo info
	view.on('init', function (next) {

		var q = SiteInfo.model.find({}).populate('mainImage');

		q.exec(function (err, result) {
			locals.siteinfo = result;
			next(err);
		});

	});

	// Load project
	view.on('init', function (next) {

		var q = ProjectItem.model
		.find()
		.sort('priority')
		.populate( 'project videos images stage' )
		.find({ project: { $eq: ObjectId(req.params.id) } });

		q.exec(function (err, result) {
			locals.projectitem = result;
			next(err);
		});

	});

	// Render the view
	view.render('project', {layout: 'main'});

	// Render the view
	// ProjectItem.model
	// .find()
	// .sort('priority')
	// .populate( 'project videos images stage' )
	// .find({ project: { $eq: ObjectId(req.params.id) } }, function(err, projectitem) {
	// 	if (err) throw err;
	// 	// all the things
	// 	res.render('project', {layout: 'main', projectitem: projectitem});
	// });

};
