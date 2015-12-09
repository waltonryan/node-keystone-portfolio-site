var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Category = new keystone.List('Category', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    defaultSort: 'title'
});

Category.add({
    title: { type: String, required: true },
});

Category.defaultColumns = 'title, slug|20%'
Category.register();
