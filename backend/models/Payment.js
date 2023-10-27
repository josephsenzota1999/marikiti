
const mongoose = require('mongoose')
const paymentSchema = new mongoose.Schema({
	values: {
		value: String,
		required: true
	}
},
{
	timestamps: true
})



module.exports = mongoose.model('Payment', paymentSchema)