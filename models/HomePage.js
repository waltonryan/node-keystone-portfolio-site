var keystone = require('keystone'),
    Types = keystone.Field.Types;

var HomePage = new keystone.List('HomePage', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    track: true,
    defaultSort: '-updatedAt'
});

HomePage.add({
    title: { type: String, required: true },
    description: { type: Types.Textarea },
    image: { type: Types.Relationship, ref: 'Image'}
});

HomePage.defaultColumns = 'title, slug, state|20%'
HomePage.register();
