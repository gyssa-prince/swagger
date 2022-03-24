import express from 'express';
const router = express.Router();
import Joi from '@hapi/joi';
import Message from '../models/messages.js';


const schema = {
    Email: Joi.string()
    .required()
    .email(),
    Message: Joi.string()
    .required(),
};

//get messages
router.get('/', async(req, res)=>{
    try{
     const messages = await Message.find();
     res.json(messages);
    }catch(err){
    res.json({message:err});
    }
});

router.post('/',  async(req,res)=>{
 try {
  //VALIDATE THE DATA
const {error} = Joi.validate(req.body, schema);;
if(error) return res.status(400).send(error.details[0].message);
     console.log("req.body: ",req.body);
 const AddMessage = new Message({
     Email: req.body.Email,
     Message: req.body.Message,
 })
 await Message.create(AddMessage);
 res.send("Message sent");
 res.sendStatus(200)
}catch(err){
 console.log("error: ",err)
}
})
export default router;