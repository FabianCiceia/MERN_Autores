const User = require("../models/author.model");

module.exports.findAllUsers = (req, res) => {
  User.find()
    .then(allDaUsers => res.json({ authors: allDaUsers }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleUser = (req, res) => {
	User.findOne({ _id: req.params.id })
		.then(oneSingleUser => res.json({ author: oneSingleUser }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {
  User.create(req.body)
    .then(newlyCreatedUser => res.json({ author: newlyCreatedUser }))
    // .catch(err => response.status(400).json(err));
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then(updatedUser => res.json({ author: updatedUser }))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
