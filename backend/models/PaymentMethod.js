
const mongoose = require('mongoose')
const paymentMethodSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	payment: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Payment'
	},
	provider: {
		type: String,
		required: true,
	},
	accountNumber: {
		type: String,
		required: true,
	},
	expiryDate: {
		type: String,
		required: true,
	},
	status: {
		type:Boolean,
		default: false
	}
},
{
	timestamps: true
})



module.exports = mongoose.model('PaymentMethod', userSchema)