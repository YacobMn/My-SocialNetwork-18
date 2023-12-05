const { Reaction, Thoughts } = require('../models');

module.exports = {
  // Get allReactions
  async getReactions(req, res) {
    try {
      const Reactions = await Reaction.find();
      res.json(Reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a reaction
  async getSingleReaction(req, res) {
    try {
      const Reaction = await Reaction.findOne({ _id: req.params.ReactionId })
        .select('-__v');

      if (!Reaction) {
        return res.status(404).json({ message: 'No Reaction with that ID' });
      }

      res.json(Reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create aReaction
  async createReaction(req, res) {
    try {
      const Reaction = await Reaction.create(req.body);
      res.json(Reaction);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete aReaction
  async deleteReaction(req, res) {
    try {
      const Reaction = await Reaction.findOneAndDelete({ _id: req.params.ReactionId });

      if (!Reaction) {
        res.status(404).json({ message: 'No Reaction with that ID' });
      }

      await Student.deleteMany({ _id: { $in:Reaction.students } });
      res.json({ message: 'Reaction and students deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update 
  async updateReaction(req, res) {
    try {
      const Reaction = await Reaction.findOneAndUpdate(
        { _id: req.params.ReactionId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!Reaction) {
        res.status(404).json({ message: 'No Reaction with this id!' });
      }

      res.json(Reaction);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
