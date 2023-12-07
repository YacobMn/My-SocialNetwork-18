const db = require('../config/connection');
const { User, Thought } = require('../models')
const users = require('./users.json')
const thoughts = require('./thoughts.json')
const reactions = require('./reactions.json')

db.once('open', async () => {
    //delete existing data
    await User.deleteMany();
    await Thought.deleteMany();

    const updatedThoughts = thoughts.map((thought, index) => { 
        return {...thought, reactions: reactions[index] || []}
    })

    const thoughtResults = await Thought.insertMany(updatedThoughts)

    //use insertMany to seed models
    const usersResult = await User.insertMany(users)

    const finalUsers = await Promise.all(usersResult.map(async (user, index) => {
        return await User.findByIdAndUpdate(user._id, { $addToSet: { thoughts: thoughtResults[index]._id } }, { new: true})
    }))
    
    console.log(finalUsers);

    process.exit()
});