const { Schema, model } = require('mongoose');


const reactionSchema = new Schema(
    {
        reactionId: {
            
        },
        reactionBody: {


        },
        username: {

        },
        createdAt: {
            
        }


    }
   

);
const Thought = model("Thought", thoughtSchema)
module.exports = Thought; 