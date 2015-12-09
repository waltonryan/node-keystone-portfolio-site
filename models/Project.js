var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Project = new keystone.List('Project', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    track: true,
    defaultSort: '-updatedAt'
});

Project.add({
    title: { type: String, required: true },
    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
    snippet: { type: Types.Textarea },
    description: { type: Types.Textarea },
    category: { type: Types.Relationship, ref: 'Category'},
    thumbnailImage: { type: Types.Relationship, ref: 'Image'},
    primaryImage: { type: Types.Relationship, ref: 'Image'}
});

Project.defaultColumns = 'title, state|20%'
Project.register();
