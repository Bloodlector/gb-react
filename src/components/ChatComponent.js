import React, { useState, useEffect } from 'react';

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
      
<div>
    <div>
    {messageList.map((message)=>(
                            <h1>{message.author}: {message.text}</h1>                            
                        ))}
    </div>
<form onSubmit={makeMessage}>
          <label>
            Чат:
            <textarea value={value} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" id="submit" />
        </form>
</div>
    );
  };


