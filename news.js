const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    id: {type: Number, unique: true},
    title: {type: String, unique: true},
    user: String,
    time: Number,
    time_ago: String,
    comments_count: Number,
    type: String,
    url: String,
    domain: String,
    points: Number
});

module.exports = mongoose.model('News', NewsSchema, 'demo');