import classes from './Messages.module.css';
import MessagesItem from "./MessagesItem/MessagesItem";
import Message from "./Message/Message";
import {useRef} from "react";

const Messages = ({ dataMessages }) => {

  const textareaRef = useRef(null)
  const addPost = () => {
    let text = textareaRef.current.value
  }

  const messages = dataMessages.map(data => {
    return (
        <MessagesItem key={data.id} id={data.id} userName={data.name}/>
    )
  })

  const message = dataMessages.map(data => (
    data.messages.map(message => {
      return (
          <Message message={message.message} key={message.id}/>
      )
    })
  ))

  const messagesBlock = <>
    {message}
    <div className={classes.create}>
      <textarea ref={textareaRef}></textarea>
      <div className={classes.btnGroup}>
        <button onClick={addPost}>Add post</button>
        <button>Remove</button>
      </div>
    </div>
  </>

  return (
    <div className={classes.messages}>
      <div>{messages}</div>
      <div>{messagesBlock}</div>
    </div>
  )
}

export default Messages