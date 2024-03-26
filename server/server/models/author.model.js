const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	author: {
		type: String,
		minlength: [
			3, 
			"the name to be shorter than three characters"
		],
		required: [
			true,
			"Authors is required"
		]
	}
});

const User = mongoose.model("Authors", UserSchema);

module.exports = User;