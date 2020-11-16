const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new ProfileSchema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  handle: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  numberOfPosts: {
    type: Number,
    required: true
  },
  totalFollowers: {
    type: Number,
    required: true},
  totalFollowing: {
    type: Number,
    required: true
  },
  highlights: [{
    type: Schema.Types.ObjectId,
    ref: 'story'
  }],
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'post'
  }]
  
});

module.export = Profile = mongoose.model('profiles', ProfileSchema);