import { NextResponse } from "next/server"

export const GET = async()=>{
  
    try{
        const response = NextResponse.json({
            message:"Logged out sucessfully",
            sucess:true
        })

        response.cookies.set("token","",{
            httpOnly:true,
            expires: new Date(0)
        })

        return response
    }
    catch(err){
        return NextResponse.json({
            error: err.message,
            status:500
        })
    }

} 