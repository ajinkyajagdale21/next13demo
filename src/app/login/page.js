"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from 'axios'
import { useState } from "react"
import styles from './login.module.css'

export default function LoginPage() {
  return (
    <div>
        <form className={styles.loginForm}>    
                <h2>Login</h2>
                <div className={styles.inputContainer}>
                    <input placeholder="Enter phone number or email" className={styles.inputField}/>
                    <input placeholder="Enter password" className={styles.inputField}/>
                </div>
                <button className={styles.submitBtn}>Login</button>
                <Link href="/signup" style={{textDecoration:"none"}}>
                    <p className={styles.linkerText}>Don't have account ? Sign Up Here</p>
                </Link>
            </form>
    </div>
  )
}
