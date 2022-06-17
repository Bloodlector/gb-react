import { useSelector, useDispatch } from 'react-redux'
import { toggleVisibleProfile } from '../store/profile'
import styles from './profile.module.css'
import { ProfileForm } from '../components'

export const ProfilePage = ({ toggleVisibleProfileWithConnect }) => {
  const profile = useSelector((state) => state.profile)
  const dispatch = useDispatch()

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
          <button onClick={() => dispatch(toggleVisibleProfile())}>
            Раскрыть профиль
          </button>
          {/* <button onClick={toggleVisibleProfileWithConnect}>
            toggleVisibleProfileWithConnect
          </button> */}
          <hr />
          {profile.isVisibleProfile && (
            <div className={styles.row}>
              <div className={styles.col - 12}>
                <h1>{profile.firstName}</h1>
                <h1>{profile.lastName}</h1>
                <p>Телефон:{profile.phoneNumber}</p>
                <p>
                  Почта: <a href="mailto: #">{profile.email}</a>
                </p>
                <p>Телеграм: {profile.telegram}</p>
                <p>Скайп: {profile.skype}</p>
                <ProfileForm
                  firstName={profile.firstName}
                  lastName={profile.lastName}
                  phoneNumber={profile.phoneNumber}
                  email={profile.email}
                  telegram={profile.telegram}
                  skype={profile.skype}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// // @TODO witout hooks
// const mapStateToProps = (state) => {
//   return {
//     profile: state.profile,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleVisibleProfileWithConnect: () => dispatch(toggleVisibleProfile()),
//   }
// }

// export const ProfilePageWithConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProfilePage)
