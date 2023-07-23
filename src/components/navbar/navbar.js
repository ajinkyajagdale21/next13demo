"use client"
import Link from 'next/link';
import styles from './navbar.module.css'
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    
    const logoutHandler=async()=>{
        try{
            await axios.get("api/users/logout")
            toast.success("logged out sucessfully")
            useRouter.push("/")
        }
        catch(error){
            toast.error(error.message)
        }
    }

    return (
        <nav className="navbar navbar-expand-lg bg-black py-2 px-3" >
            <div className="container-fluid">
                <a className={`navbar-brand ${styles.navHeader}`} href="/">
                   EpicDrive Cars
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">

                    </div>
                    <div className="d-flex" >
                        <Link href="/login">
                            <button className={styles.navItems} >
                                Log in 
                            </button>
                        </Link>
                        <Link href="/signup">
                            <button className={styles.navBtns} >
                                Sign Up
                            </button>
                        </Link>
                        <button className={styles.navBtns} onClick={logoutHandler} >
                            Log out
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
