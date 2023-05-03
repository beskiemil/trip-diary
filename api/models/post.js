const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    tags: { type: String, required: true },
    text: { type: String, required: true, unique: true },
    images: [{ type: String, required: true }],
    cover: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
  }
);

const PostModel = model('Post', PostSchema);

module.exports = PostModel;
