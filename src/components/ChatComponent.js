import React, { useState, useEffect } from 'react';
import styles from "../components/chatcomponent.module.css"

export const ChatComponent = () => {
    const [value, addValue] = useState('Введите сообщение');
    const [messageList, addMessage] = useState([]); 

    function handleChange(event) {
        addValue(event.target.value);
      };
    const makeMessage = (event)=> {
          const chatMessage = {author: 'User', text: value};
          addMessage([...messageList, chatMessage]);
          event.preventDefault();
      };
    useEffect(()=> {
        let lastMessage = messageList[messageList.length-1]
        if (lastMessage) {            
            if (lastMessage.author === "User"){
                setTimeout(()=> addMessage([...messageList, {author: 'Bot', text: "Привет, User, пиши исчо"}]), 1500);
            } 
            return
        }
         return;
    });
      
    return (
      
<div className={styles.main}>
Чат: <br/>
    <div className={styles.chatbox}>
    {messageList.map((message)=>(
                            <h1>{message.author}: {message.text}</h1>                            
                        ))}
    </div>
<form onSubmit={makeMessage} className={styles.chatform}>
          <label>
            
            <textarea value={value} onChange={handleChange} className={styles.chatform}/>
          </label>
          <input type="submit" value="Отправить" id="submit" className={styles.chatsubmit}/>
        </form>
</div>
    );
  };


