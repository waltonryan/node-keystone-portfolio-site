var keystone = require('keystone'),
    Types = keystone.Field.Types;

var ProjectCategory = new keystone.List('ProjectCategory', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    defaultSort: 'title'
});

ProjectCategory.add({
    title: { type: String, required: true },
});

ProjectCategory.defaultColumns = 'title, slug|20%'
ProjectCategory.register();
