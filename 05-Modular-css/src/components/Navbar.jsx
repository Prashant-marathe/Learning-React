import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.nav}>
        <h1 className={styles.logo}>Prince</h1>
        <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Navbar