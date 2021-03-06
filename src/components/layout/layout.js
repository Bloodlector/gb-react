import styles from './layout.module.css'

export const Layout = ({ chats, messages, header }) => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>{header}</div>

      <div className={styles.content}>
        <div className={styles.chats}>{chats}</div>
        <div className={styles.messages}>{messages}</div>
      </div>
    </div>
  )
}
