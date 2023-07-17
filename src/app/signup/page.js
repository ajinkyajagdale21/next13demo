"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from 'axios'
import { useEffect, useState } from "react"
import styles from './signup.module.css'
import { toast } from "react-hot-toast"

export default function SignupPage (){
    const [userData,setUserData] = useState({
        email:"",
        password:"",
        userName: "",
    })
    const router = useRouter()
    const [buttonDisabled,setButtonDisabled]=useState(true)

    const signupHandler=async(e)=>{
        e.preventDefault()
        try{
            const response = await axios.post("api/users/signup",userData)
            console.log(response);
            router.push('/login')
        }
        catch(error){
            console.log("signup failed" ,error.message);
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        if(userData.email.length>0 && userData.password.length>0 && userData.userName.length>0){
            setButtonDisabled(false)
        }
        else{
            setButtonDisabled(true)
        }
    },[userData])

    return(
        <div>
            <form className={styles.signupForm} onSubmit={signupHandler}>    
                <h2>Sign Up</h2>
                <div className={styles.inputContainer}>
                    <input placeholder="Enter username" value={userData.userName} className={styles.inputField} onChange={(e)=>setUserData({...userData,userName:e.target.value})}/>
                    <input placeholder="Enter phone number or email" value={userData.email} className={styles.inputField} onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
                    <input placeholder="Enter password" value={userData.password} className={styles.inputField} onChange={(e)=>setUserData({...userData,password:e.target.value})}/>
                </div>
                <button className={buttonDisabled ? `${styles.submitBtn} ${styles.disabledSubmitBtn}` : styles.submitBtn} type="submit" disabled={buttonDisabled}>Sign Up</button>
                <Link href="/login" style={{textDecoration:"none"}}>
                    <p className={styles.linkerText}>Already have account ? Login Here</p>
                </Link>
            </form>
        </div>
    )
}