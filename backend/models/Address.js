

const mongoose = require('mongoose')
const AutoIncrement = required('mongoose-sequence')(mongoose)

const addressSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	street: {
		type: String,
		required: true
	},,
	address1: {
		type: String,
		required: true
	},
	address2: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	region: {
		type: String,
		required: true
	},
	postalCode: {
		type: String,
		required: true
	},
	country: {
		type: String,
		required: true
	},
	roles: [{
		type: String,
		default: "Seller"
	}],
	active: {
		type:Boolean,
		default: true
	}
})

addressSchema.plugin(AutoIncrement, {
	inc_field: 'ticket',
	id: 'ticketNums',
	start_seq: 500
})
module.exports = mongoose.model('Address', addressSchema)