var keystone = require('keystone'),
    Types = keystone.Field.Types;

var About = new keystone.List('About', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    track: true,
    defaultSort: '-updatedAt'
});

About.add({
    title: { type: String, required: true },
    email: { type: Types.Email},
    description: { type: Types.Textarea },
    image: { type: Types.Relationship, ref: 'Image'},
});

About.defaultColumns = 'title, slug, state|20%'
About.register();
