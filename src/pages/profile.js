import styles from './profile.module.css'

export const ProfilePage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col - 12}>
              <h2>Контакты для связи</h2>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col - 12}>
              <p>Телефон: +7 (123) 456-78-90</p>
              <p>
                Почта: <a href="mailto: #">test@test.com</a>
              </p>
              <p>Скайп: skype</p>
              <p>Телеграм: @telegram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
