import styles from './page.module.css'
import toast,{ Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>Welcome to A&A</div>
      <Toaster />
    </main>
  )
}
