import express from "express"
import * as dotenv from 'dotenv'
import {v2 as cloudinary} from 'cloudinary'


import {Post} from '../mongodb/models/post.js'

dotenv.config()

const router =express.Router()

cloudinary.config(
    {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    }
)
router.route('/').post( async(req,res)=>{

    try {
        const {name ,prompt,image} =req.body
       
       
        
     const response= await  cloudinary.uploader.upload(image)
     
     
        
       

    const newPost =await Post.create({
        name,
        prompt,
        image:response.secure_url
    })
    
    res.status(200).json({succes:true,post:newPost})

    } catch (error) {
        res.status(500).send({succes:false,message:error})
    }
    
})

//GET ALL POSTS
router.route('/').get( async(req,res)=>{

    try {
        const posts = await Post.find({})
        res.status(200).json({succes:true,posts:posts})
    } catch (error) {
        res.status(400).json({succes:false,error:error})
        
    }
    

})


 

export default router