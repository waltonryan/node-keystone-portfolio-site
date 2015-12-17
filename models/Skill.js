var keystone = require('keystone'),
    Types = keystone.Field.Types;

var Skill = new keystone.List('Skill', {
    autokey: { path: 'slug', from: 'title', unique: true },
    map: { name: 'title' },
    defaultSort: 'title'
});

Skill.add({
    title: { type: String, required: true },
    priority: { type: Types.Number },
    image: { type: Types.Relationship, ref: 'Image'}
});

Skill.defaultColumns = 'title, priority, slug|20%'
Skill.register();
