const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: '',
            minlenght: 1,
            maxlength: 280
        },
        createAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: ''
        },
        reactions: {


        }

    }
   

);
const Thought = model("Thought", thoughtSchema)
module.exports = Thought; 