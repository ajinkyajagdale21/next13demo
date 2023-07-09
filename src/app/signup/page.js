"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from 'axios'
import { useState } from "react"
import styles from './signup.module.css'

export default function SignupPage (){
    const [userData,setUserData] = useState({
        email:"",
        password:"",
        userName: "",
        
    })
    return(
        <div>
            <form className={styles.signupForm}>    
                <h2>Sign Up</h2>
                <div className={styles.inputContainer}>
                    <input placeholder="Enter username"  className={styles.inputField}/>
                    <input placeholder="Enter phone number or email" className={styles.inputField}/>
                    <input placeholder="Enter password" className={styles.inputField}/>
                </div>
                <button className={styles.submitBtn}>Sign Up</button>
                <Link href="/login" style={{textDecoration:"none"}}>
                    <p className={styles.linkerText}>Already have account ? Login Here</p>
                </Link>
            </form>
        </div>
    )
}