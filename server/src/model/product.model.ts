import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name cannot be empty"]
    },
    price: {
        type: Number,
        required: [true, "Price cannot be empty"],
        min: [0, "Price cannot be negative"]
    },
    description: {
        type: String,
    },
    flavour: {
        type: String
    },
    buyInfo: {
        type: Number,
        default: 0,
        min: [0, "Buy info count cannot be negative"]
    },
    likes: {
        type: Number,
        default: 0,
        min: [0, "Likes count cannot be negative"]
    },
    files: [{
        public_id: {
            type: String,
        },
        filename: {
            type: String
        },
        originalname: {
            type: String
        },
        url: {
            type: String
        }
    }]
}, {
    timestamps: true
});

export const Product = mongoose.model('Product', productSchema);
