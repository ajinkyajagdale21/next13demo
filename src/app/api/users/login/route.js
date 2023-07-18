import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

connect()

export async function POST(request){
    
    try{
        
        const {email,password} = await request.json()
        
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({message:"User not found, please sign up",status:400})
        }

        const validPassword= await bcryptjs.compare(password,user.password)
        if(!validPassword){
            return NextResponse.json({message:"Invalid password",status:400})
        }

        const tokendata ={
            id: user._id,
            userName:user.userName,
            email:user.email
        }

        const token = jwt.sign(tokendata ,process.env.TOKEN_SECRET , {expiresIn: '24h'})

        const response = NextResponse.json({message:"login sucessfull",status:200})

        response.cookies.set("token",token,{
            httpOnly:true
        })

        return response

    }
    catch(error){
       return NextResponse.json({error})
    }    

}