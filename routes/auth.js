import express from 'express';
const router = express.Router();
import Joi from '@hapi/joi';
import Admin from '../models/admin.js';
import jwt from 'jsonwebtoken';




    const schema = {
        Email: Joi.string()
        .required()
        .email(),
        Names: Joi.string(),
        Password: Joi.string()
        .min(6)
        .required()
    };
  

router.get('/', (req,res)=>{
    res.sendStatus(200)
})

 router.post('/register',  async(req,res)=>{
     try {
      //VALIDATE THE DATA
    const {error} = Joi.validate(req.body, schema);;
    if(error) return res.status(400).send(error.details[0].message);
         console.log("req.body: ",req.body);
     const addAdmin = new Admin({
         Names:req.body.Names,
         Email: req.body.Email,
         Password: req.body.Password,
     })
     await Admin.create(addAdmin);
     res.send("Admin created");
     res.sendStatus(200)
    }catch(err){
     console.log("error: ",err)
    }
 })

router.post('/', async(req, res)=>{

    //VALIDATE THE DATA
    const {error} = Joi.validate(req.body, schema);;
    if(error) return res.status(400).send(error.details[0].message);
    //Checking the email exist in database 
    const admin = await Admin.findOne({Email: req.body.Email});
    if(!admin) return res.status(400).send('Emai is not found');
    //if password is correct
    const validPass = await Admin.findOne({Email:req.body.Email,Password:req.body.Password});
    if(!validPass) return res.status(400).send('Invalid password');
      
    //create and assign a token
    const token = jwt.sign({_id: admin._id}, process.env.TOKEN_SECRET)
    res.header('auth-token',token).send(token);

 
});

export default router;