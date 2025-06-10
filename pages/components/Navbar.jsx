import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <button className={styles.navButton}>Home</button>
      <button className={styles.navButton}>Music</button>
      <button className={styles.navButton}>Links</button>
      <button className={styles.navButton}>Contact</button>
    </nav>
  );
}
