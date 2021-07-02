import classes from './MessagesItem.module.css';
import { NavLink } from 'react-router-dom';

const MessagesItem = ({id, userName } ) => {
  return (
    <div className={classes.branches}>
      <img alt="avatar" src="https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"/>
      <NavLink to={`/messages/${id}`} className={`${classes.branch} ${classes.active}`}>{userName}</NavLink>
    </div>
  )
}

export default MessagesItem