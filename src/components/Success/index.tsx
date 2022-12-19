import styles from './Success.module.scss'

export const Success = () => {
  return (
    <div className={styles.success}>
      <div className={styles.wrapper}>
        <p className={styles.title}>Thank you for being with us!</p>
        <button className={styles.button}>Go back</button>
      </div>
    </div>
  )
}
