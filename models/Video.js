var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Video = new keystone.List('Video', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    defaultSort: 'title'
});

Video.add({
    title: { type: String, required: true },
    videoId: { type: String},
});

Video.defaultColumns = 'title, slug'
Video.register();
