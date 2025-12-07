//after downloading react es6 snippet extension use rafce to create this component
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className={styles.logo}>
            <img src="/images/bird.jpg" alt="Logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
    </nav>
  )
}

export default Navigation;