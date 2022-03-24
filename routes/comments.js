import express from 'express';
const router = express.Router();
import Joi from '@hapi/joi';
import Comment from '../models/comments.js';


const schema = {
    Blogid: Joi.string()
    .required(),
    Comment: Joi.string()
    .required(),
};

//get comments
router.get('/:Blogid', async(req, res)=>{
    try{
    var postId = { Blogid: req.params.Blogid };
     const comments =await Comment.find(postId);
     res.send(comments);
    }catch(err){
    res.json({message:err});
    }
});

router.post('/',  async(req,res)=>{
 try {
  //VALIDATE THE DATA
const {error} = Joi.validate(req.body, schema);
if(error) return res.status(400).send(error.details[0].message);
     console.log("req.body: ",req.body);
 const AddComment = new Comment({
     Blogid: req.body.Blogid,
     Comment: req.body.Comment
 })
 await Comment.create(AddComment);
 res.sendStatus(201);
}catch(err){
 console.log("error: ",err)
 res.status(503);
}
})
export default router;