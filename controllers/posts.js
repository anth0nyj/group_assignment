//Dependencies
const express = require('express');
const router = express.Router();
const Post = require('../models/posts.js');

// API Endpoints

// Index
router.get ( '/' , async ( req , res ) => {
  try {
    const posts = await Post.find();
    res.status( 200 ).json( posts );
  } catch ( error ) {
    res.status( 400 ).json({error : err.message});
  }
});

// Create
router.post('/', async (req, res) => {
  // add try catch err message
  try {
    const newPost = await Post.create(req.body);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json({err: err.message});
  }
});

// Delete
router.delete ( '/:id' , async ( req , res ) => {
  try {
    const deletePost = await Post.findByIdAndRemove( req.params.id );
    res.status( 200 ).json( deletePost );
  } catch ( error ) {
    res.status( 400 ).json({error : error.message});
  }
});

// Edit
router.put ( '/:id' , async ( req , res ) => {
  try {
    const updatePost = await Post.findByIdAndUpdate( req.params.id, req.body, { new : true } );
    res.status( 200 ).json( updatePost );
  } catch ( error ) {
    res.status( 400 ).json({error : error.message});
  }
});

module.exports = router;
