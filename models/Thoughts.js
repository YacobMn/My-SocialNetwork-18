const { Schema, model } = require('mongoose');
const ReactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: '',
            minlenght: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: ''
        },
        reactions: [ReactionSchema]
    }
);
const Thought = model("Thought", thoughtSchema)
module.exports = Thought; 