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
            default: Date.now
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema]
    }
);
const Thought = model("Thought", thoughtSchema)
module.exports = Thought; 