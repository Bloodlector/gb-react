import { NavLink } from 'react-router-dom'
import styles from './header.module.css'
import {
  AccountCircleTwoTone,
  ChatTwoTone,
  MenuTwoTone,
} from '@mui/icons-material'
import { useContext } from 'react'
import { ThemeContext } from '../../theme-context'

const menu = [
  { title: 'Home', to: '/', icon: <MenuTwoTone /> },
  {
    title: 'Chat',
    to: '/chat',
    icon: <ChatTwoTone />,
  },
  { title: 'Profile', to: '/profile', icon: <AccountCircleTwoTone /> },
]

export function Header() {
  const { theme, themeSetter } = useContext(ThemeContext)
  return (
    <div className={styles.header}>
      <h1>
        Выбранная тема: <span className={styles.themename}>{theme.name}</span>{' '}
        <br />
        <div className={styles.header2}>
          <div
            className={styles.themechecker}
            onClick={() => themeSetter('dark')}
          >
            dark
          </div>{' '}
          <div
            className={styles.themechecker}
            onClick={() => themeSetter('light')}
          >
            light
          </div>
        </div>
      </h1>

      <h1 className={styles.headerchat}>Чат</h1>

      <ul className={styles.headermenu}>
        {menu.map((item) => (
          <li key={item.title} className={styles.navlink}>
            <NavLink to={item.to}>{item.icon}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
