var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Stage = new keystone.List('Stage', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    defaultSort: 'title'
});

Stage.add({
    title: { type: String, required: true },
});

Stage.defaultColumns = 'title, slug|20%'
Stage.register();
