import { List } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { Chat } from './chat'

export const ChatList = () => {
  const [chats] = useState([
    { name: 'room1', author: 'Иван', lastmessage: 'Привет' },
    { name: 'room2', author: 'Сергей', lastmessage: 'йохохо' },
    { name: 'room3', author: 'Евгений', lastmessage: 'Как дела?' },
    { name: 'room4', author: 'Елена', lastmessage: 'Пойдем гулять?' },
  ])

  const { roomId } = useParams()

  return (
    <List component="nav">
      {chats.map((chat) => (
        <Link key={chat.name} to={`/chat/${chat.name}`}>
          <Chat
            title={chat.name}
            selected={roomId === chat.name}
            author={chat.author}
            lastmessage={chat.lastmessage}
          />
        </Link>
      ))}
    </List>
  )
}
