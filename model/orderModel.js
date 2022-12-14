const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        required: true
    },
    products: [{
        productId: { type: ObjectId, ref: 'Product' },
        quantity: { type: Number },
        total: { type: Number, required: true }
    }],
    subTotal: {
        type: Number,
        required: true
    },
    discount: {
        couponId: { type: ObjectId, ref: 'Coupon' },
        amount: Number
    },
    grandTotal: {
        type: Number,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    paymentMethod: {
        type: String,
    },
    paymentStatus: {
        type: String,
        default: 'Pending'
    },
    orderStatus: {
        type: String,
        default: 'Order Placed'
    },
    orderDate: {type: Date},
    deliveryDate: { type: Date },
    modifiedDate: { type: Date }

})

module.exports = Order = mongoose.model('Order', orderSchema);