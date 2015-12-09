var keystone = require('keystone'),
    Types = keystone.Field.Types;

var ProjectItem = new keystone.List('ProjectItem', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    track: true,
    defaultSort: '-updatedAt'
});

ProjectItem.add({
    title: { type: String, required: true },
    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
    project: { type: Types.Relationship, ref: 'Project'},
    priority: { type: Types.Number },
    description: { type: Types.Textarea },
    video: { type: Types.Relationship, ref: 'Image'},
    images: { type: Types.Relationship, ref: 'Image', many: true},
});

ProjectItem.defaultColumns = 'title, state|20%'
ProjectItem.register();
