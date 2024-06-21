import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import User from "./models/User.js"
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";
import multer from "multer";
import fs from "fs-extra"
import postModel from "./models/Post.js";
import {dirname} from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app=express()
app.use(cors({credentials:true,origin:'http://localhost:5173'}))
app.use(express.json())
app.use(cookieParser())
app.use('/uploads', express.static(__dirname + '/uploads'));
const salt=bycrypt.genSaltSync(10)
const secret="dsfefwjnverunuenr9f3430ffn3ds"
const uploadMiddleware = multer({ dest: 'uploads/' })

mongoose.connect('mongodb://localhost:27017')
    .then(()=>console.log('Connected'))
    .catch(()=>console.log("Not Connected"))

app.post('/register',async (req,res)=>{
    const {AdminName,AdminMail,Password}=req.body;
    try{
        const Userdoc=await User.create({
            AdminName,
            AdminMail,
            Password:bycrypt.hashSync(Password,salt)
        })
        res.json(Userdoc)
    }
    catch(e){
        res.status(400).json(e.message)
    }
    
})

app.post('/Login',async (req,res)=>{
    const {userLoginName,userLoginPassword}=req.body;
    try{
    const Userdoc=await User.findOne({AdminName:userLoginName})
    const passOk=bycrypt.compareSync(userLoginPassword,Userdoc.Password)
    
    if(passOk){
        jwt.sign({userLoginName,id:Userdoc._id},secret,{},(err,token)=>{
            if(err) throw err;
            res.cookie('token',token).json('Ok')
        })
    }
    else{
        res.status(400).json("wrong Password")
    }
    }
    catch(e){
        res.status(400).json(e.message)
    }

})

app.get('/profile',(req,res)=>{
    const {token}=req.cookies;
    jwt.verify(token,secret,{},(err,info)=>{
        if(err) throw err;
        res.json(info)
    })
})

app.post('/Logout',(req,res)=>{
    res.cookie('token','').json('ok')
})
app.post('/post',uploadMiddleware.single('image'),async (req,res)=>{
    const {originalname,path}=req.file;
    const parts=originalname.split(".");
    const ext=parts[parts.length-1]
    const newPath=path+"."+ext;
    fs.renameSync(path,newPath)

    const {token}=req.cookies;
    jwt.verify(token,secret,{},async (err,info)=>{
        if(err) throw err;

        const {title,summary,content}=req.body
        const postDoc=await postModel.create({
            title,
            summary,
            content,
            image:newPath,
            author:info.id,
        })
        res.json(postDoc)
    })    
})

app.get('/post',async (req,res)=>{
    const posts=await postModel.find().populate('author',['AdminName']).sort({createdAt:-1}).limit(20)
    res.json(posts)
})


app.get('/ReadMore/:id',async (req,res)=>{
    const {id}=req.params;
    const postDoc=await postModel.findById(id).populate('author',['AdminName'])
    res.json(postDoc)
})

app.listen(3000)