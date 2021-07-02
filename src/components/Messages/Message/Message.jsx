import classes from './Message.module.css';

const Message = ({message}) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialog}>{message}</div>
    </div>
  )
}

export default Message