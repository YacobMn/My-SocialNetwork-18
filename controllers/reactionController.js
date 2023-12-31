const { Thought } = require('../models');

module.exports = {
  // Get allReactions
  async getReactions(req, res) {
    try {
      const reactions = await Reaction.find();
      res.json(reactions)
      res.status(200).json(reactions);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a reaction
  async getSingleReaction(req, res) {
    try {
      const reaction = await Reaction.findOne({ _id: req.params.reactionId })
        .select('-__v');

      if (!reaction) {
        return res.status(404).json({ message: 'No reaction with that ID' });
      }

      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create aReaction
  async createReaction(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { new: true });
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete aReaction
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { _id: req.params.reactionId } } },
        { new: true });
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update 
  async updateReaction(req, res) {
    try {
      const reaction = await Reaction.findOneAndUpdate(
        { _id: req.params.reactionId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!reaction) {
        res.status(404).json({ message: 'No reaction with this id!' });
      }

      res.json(reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
