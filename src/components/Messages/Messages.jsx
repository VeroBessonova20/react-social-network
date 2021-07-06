import classes from './Messages.module.css';
import MessagesItem from "./MessagesItem/MessagesItem";
import Message from "./Message/Message";
import {updateNewMessageCreator, sendMessageCreator} from "../../redux/state";

const Messages = (props) => {
  const state = props.store.getState().dialogPage
  const dialogs = state.dialogs
  const message = state.messages
  const newMessage = state.newMessageBody

  const addPost = () => {
    props.store.dispatch(sendMessageCreator())
  }

  const clear = (event) => {
    event.target.value = ''
  }

  const onChangePostText = (event) => {
    let text = event.target.value;
    props.store.dispatch(updateNewMessageCreator(text))
  }

  const messages = dialogs.map(data => {
    return (
        <MessagesItem key={data.id} id={data.id} userName={data.name}/>
    )
  })

  const messageElem = message.map(data => {
    return (
      <Message message={data.message} key={data.id}/>
    )
  })

  const messagesBlock = <>
    {messageElem}
    <div className={classes.create}>
      <textarea
        placeholder="Enter your message"
        value={newMessage}
        onChange={onChangePostText}
      />
      <div className={classes.btnGroup}>
        <button onClick={addPost}>Add post</button>
        <button onClick={clear}>Remove</button>
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