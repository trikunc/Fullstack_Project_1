const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
        type: String
    },
    publishDate: {
        type: Date,
        require: true
    },
    pageCount: {
        type: Number,
        require: true
    },
    createdAt: {
        type: Date,
        require: true,
        default: Date.now
    },
    coverImage: {
        type: Buffer,
        require: true
    },
    coverImageType: {
        type: String,
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Author'
    }
})

bookSchema.virtual('coverImagePath').get(function() {
    if (this.coverImage != null && this.coverImageType != null) {
        return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
    }
})

module.exports = mongoose.model('Book', bookSchema)