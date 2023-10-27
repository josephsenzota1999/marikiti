
const mongoose = require('mongoose')
const orderLineSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Order'
	},
	orderLine: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Product'
	},
	quantity: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	}
},
{
	timestamps: true
})



module.exports = mongoose.model('OrderLine', orderLineSchema)