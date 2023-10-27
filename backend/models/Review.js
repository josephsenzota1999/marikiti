
const mongoose = require('mongoose')
const reviewSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	orderLine: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'OrderLine'
	},
	rating: {
		type: String,
		required: true,
	},
	comment: {
		type: String,
		required: true,
	}
},
{
	timestamps: true
})



module.exports = mongoose.model('Review', reviewSchema)