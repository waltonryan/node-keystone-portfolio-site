var keystone = require('keystone'),
		ProjectItem = keystone.list('ProjectItem'),
		ObjectId = require('mongodb').ObjectID;

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	// Render the view
	ProjectItem.model
	.find()
	.sort('priority')
	.populate( 'project videos images stage' )
	.find({ project: { $eq: ObjectId(req.params.id) } }, function(err, projectitem) {
		if (err) throw err;
		console.log(projectitem);
		// all the things
		res.render('project', {layout: 'main', projectitem: projectitem});
	});

};
