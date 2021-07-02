import classes from './Sidebar.module.css';
import MessagesItem from "../Messages/MessagesItem/MessagesItem";

const Sidebar = ({ activeFriends }) => {

  const friends = activeFriends.map(data => {
    return (
      <MessagesItem key={data.id} id={data.id} userName={data.name}/>
    )
  })

  return (
    <div className={classes.wrapperSidebar}>
      <h2>Friends</h2>
      <div  className={classes.groupFriends}>
        {friends}
      </div>
    </div>
  )
}

export default Sidebar