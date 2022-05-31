import { NavLink } from 'react-router-dom'
import styles from './header.module.css'
import {
  AccountCircleTwoTone,
  ChatTwoTone,
  MenuTwoTone,
} from '@mui/icons-material'

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
  return (
    <div className={styles.header}>
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
