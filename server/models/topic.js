let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let TopicSchema = new Schema({
_user: { type: Schema.Types.ObjectId, ref: 'User'},
topic: { type: String, required: true},
description: { type: String, required: true},
category: { type: String, required: true},
comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
//referring to things in different schemas
}, {timestamps: true})

mongoose.model('Topic', TopicSchema)
