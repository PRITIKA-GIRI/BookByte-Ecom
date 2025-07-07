import express from 'express';
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../db';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    try {
        const userExists = await pool.query(
            "SELECT * from users WHERE username=$1 AND email=$2", [username, email]);

        if (userExists.rows.length > 0) {
            return res.status(400).json({ msg: "User already exists" });
        }

        const hashedPassword=await bycrypt.hash(password,10);

        await pool.query(
            "INSERT INTO users(username,email,password) VALUES ($1,$2,$3)",[username,email,hashedPassword]
        );
        res.status(201).json({msg:"User registered successfully"});
    }catch(err){
        console.err(err);
        return res.status(500).json({msg:"Server error"});
    }

})

router.post('/login',async(req,res)=>{
    const{username,password}=req.body;
    try{
        const result=await pool.query(
            "SELECT * FROM users WHERE username=$1"
            ,[username]);

        if(result.rows.length===0)
            return res.status(400).json({msg:"Invalid Credentials"});
        const user=result.rows[0];
        
        const isMatch=await bycrypt.compare(password,user.password);

        if(!isMatch)
            return res.status(400).json({msg:"Invalid Credentials"});

        const token=jwt.sign({id:user.id},process.env.JWT_SECRET,{
             expiresIn:"1hr",
        });

        res.send(token);
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"Server error"});
    }
})



export default router;