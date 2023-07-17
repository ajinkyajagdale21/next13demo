import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'

connect()

export async function GET(request) {
    return new Response('Hello, Next.js!', {
      status: 200,
    })
  }

export async function POST(request){
    try{
        const reqBody = await request.json()
        const {userName,password,email}= reqBody 

        const user = User.findOne({email})

        console.log(user,"one");

        if(user){
            return NextResponse.json({error:"user already exists",status:400 })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword= await bcryptjs.hash(password,salt)
        
        const newUser = new User({
            userName,
            email,
            password: hashedPassword,
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        return NextResponse.json({message:"User created successfully !! ", success:true,savedUser})

    }
    catch(error){
        return NextResponse.json({error})
    }
}