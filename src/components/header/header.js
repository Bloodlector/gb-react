import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'
import {
  Button,
  Avatar,
  Container,
  Typography,
  IconButton,
  Toolbar,
  Box,
  AppBar,
} from '@mui/material'
import { ThemeContext } from '../../theme-context'

const pages = [
  { title: 'Home', to: '/' },
  { title: 'Chat', to: '/chat' },
  { title: 'Profile', to: '/profile' },
  { title: 'Gists', to: '/gists' },
]

// const menu = [
//   { title: 'Home', to: '/', icon: <MenuTwoTone /> },
//   {
//     title: 'Chat',
//     to: '/chat',
//     icon: <ChatTwoTone />,
//   },
//   { title: 'Profile', to: '/profile', icon: <AccountCircleTwoTone /> },
//   { title: 'Gists', to: '/gists', icon: <AccountCircleTwoTone /> },
// ]

export function Header() {
  const { themeSetter, theme } = useContext(ThemeContext)

  return (
    <div position="static" color="primary" className={styles.header}>
      <Container maxWidth="xl">
        <Button
          onClick={() => themeSetter('light')}
          style={{ color: theme.theme.color }}
        >
          light
        </Button>
        <Button
          onClick={() => themeSetter('dark')}
          style={{ color: theme.theme.color }}
        >
          dark
        </Button>
        <hr />
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            {pages.map(({ to, title }) => (
              <Button
                key={title}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link className={styles.link} to={to}>
                  {title}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Avatar />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </div>
  )
}
