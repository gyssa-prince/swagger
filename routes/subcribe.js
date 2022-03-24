import express from 'express';
const router = express.Router();
import Joi from '@hapi/joi';
import Subcribe from '../models/subscribe.js';


const schema = {
    Email: Joi.string()
    .required()
    .email()
};

//get messages
router.get('/', async(req, res)=>{
    try{
     const subcribers = await Subcribe.find();
     res.json(subcribers);
    }catch(err){
    res.json({message:err});
    res.status(501);
    }
});

router.post('/',  async(req,res)=>{
 try {
  //VALIDATE THE DATA
const {error} = Joi.validate(req.body, schema);;
if(error) return res.status(400).send(error.details[0].message);
     console.log("req.body: ",req.body);
 const AddSubcribe = new Subcribe({
     Email: req.body.Email,
 })
 await Subcribe.create(AddSubcribe);
 res.sendStatus(200);
}catch(err){
 res.sendStatus(501);
}
})
export default router;