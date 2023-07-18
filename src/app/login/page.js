"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from 'axios'
import { useState,useEffect } from "react"
import styles from './login.module.css'
import { toast } from "react-hot-toast"


export default function LoginPage() {

  const [userData,setUserData] = useState({
    email:"",
    password:"",
  })
  const router = useRouter()
  const [buttonDisabled,setButtonDisabled]=useState(true)

  const loginSubmitHandler=async(e)=>{

    e.preventDefault()
    try{
      const response = await axios.post("api/users/login",userData)
      if(response.status==200){
          toast.success("login successfully")
      }
      router.push('/')
    }
    catch(error){
      console.log("login failed" ,error.message);
      toast.error(error.message)
    }


  }

  useEffect(()=>{
    if(userData.email.length>0 && userData.password.length>0){
        setButtonDisabled(false)
    }
    else{
        setButtonDisabled(true)
    }
},[userData])


  return (
    <div>
        <form className={styles.loginForm} onSubmit={loginSubmitHandler}>    
                <h2>Login</h2>
                <div className={styles.inputContainer}>
                    <input placeholder="Enter phone number or email" className={styles.inputField} onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
                    <input placeholder="Enter password" className={styles.inputField} onChange={(e)=>setUserData({...userData,password:e.target.value})}/>
                </div>
                <button className={buttonDisabled ? `${styles.submitBtn} ${styles.disabledSubmitBtn}` : styles.submitBtn} type="submit">Login</button>
                <Link href="/signup" style={{textDecoration:"none"}}>
                    <p className={styles.linkerText}>Don't have account ? Sign Up Here</p>
                </Link>
            </form>
    </div>
  )
}
