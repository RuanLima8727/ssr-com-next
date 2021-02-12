import styles from './Button.module.css'


export default function Button() {
    return (
      <button type="button" className={styles.error}
      >
        Estou em SSR
      </button>
    )
  }

  