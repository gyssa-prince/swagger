import express from 'express';
import blogs from '../models/blogs.js';
const router = express.Router();
import Blog from '../models/blogs.js';
import verify from '../verify.js';



//To get all blogs
router.get('/', async(req, res)=>{
    try{
     const blogs = await Blog.find();
     res.json(blogs);
    }catch(err){
    res.json({message:err});
    res.status(501);
    }
});

//To get one specific blog
router.get('/:blogId',async(req,res)=>{
   try{
        const blog = await Blog.findById(req.params.blogId);
        if(blog==null){
            res.sendStatus(404);
        }else{
        res.json(blog);
    }
}catch(err){
    res.json({message:err});
    res.status(501);
}
});

//To delete a post
router.delete('/:blogId',verify, async(req,res)=>{
    const blog = await Blog.findById(req.params.blogId);
    if(blog!=null){try{
        await Blog.remove({_id: req.params.blogId});
        res.json("Blog deleted");
    }catch(err){
        res.json({message:err});
        res.status(501);
    }}else{
        res.sendStatus(404);
    }
    });
//To update a post
router.patch('/:blogId',verify, async (req,res)=>{
    const blog = await Blog.findById(req.params.blogId);
    if(blog!=null){try{
        await Blog.updateOne({_id: req.params.blogId}, {$set: {Title: req.body.Title,Body:req.body.Body}});
        res.json("Blog updated");
    }catch(err){
        res.json({message:err});
        res.status(501);
    }}else{
        res.sendStatus(404);
    }
})


//To post a blog
router.post('/',verify, async(req,res) =>{
    try {
     console.log("req.body: ",req.body);

     const newBlog = new Blog({
         Title: req.body.Title,
         Body: req.body.Body
     });
     
     await Blog.create(newBlog);
     res.send("Blog posted");
    }catch(err){
     console.log("error: ",err);
     res.status(501);
    }
})


export default router;