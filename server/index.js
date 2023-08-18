import express from "express"
import cors from "cors"
import * as dotenv from 'dotenv'
import post from './routes/postRoutes.js'
import dalle from './routes/dalleRoutes.js'
import connectDB from './mongodb/connect.js'

dotenv.config()


const app=express()

app.use(cors())
app.use(express.json({limit:'50mb'}))

app.get("/",async(req,res)=>{
    res.send({message:"Hi from DALLE- E clone"})
})

app.use("/api/v1/dalle",dalle)

app.use("/api/v1/posts",post)

async function  start () {
    try {
    await connectDB(process.env.MONGO_URL)
    app.listen(3000,()=>{
    console.log("server is running in port 3000");
})
} catch (error) { 
    
}
}

start()
