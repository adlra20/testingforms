import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return null
  }

  return (
  <div className={styles.container}>
      {session ? (
      <p>You are logged in!</p> 
      ) : (
        <p>You are not logged in 😔. <a href='/api/auth/signin'>login</a></p>
      )} 
  </div>
  )
}
