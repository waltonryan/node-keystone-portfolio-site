var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Project = new keystone.List('Project', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    track: true,
    defaultSort: 'priority'
});

Project.add({
    title: { type: String, required: true },
    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
    priority: { type: Types.Number },
    snippet: { type: Types.Textarea },
    category: { type: Types.Relationship, ref: 'Category', many: true},
    thumbnailImage: { type: Types.Relationship, ref: 'Image'}
});

Project.defaultColumns = 'title, priority, slug, state|20%'
Project.register();
