import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Message } from './components/message.js';
// import { ClassComponent } from './components/ClassComponent';
// import { FunctionComponent } from './components/FunctionComponent';
import { ChatComponent } from './components/ChatComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChatComponent />
    {/* <Message 
    text='Текст домашки' />
    <ClassComponent />
    <FunctionComponent /> */}
  </React.StrictMode>
);


