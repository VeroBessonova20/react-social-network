import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <img src="https://i.pinimg.com/originals/cd/98/4d/cd984ddfa74df2014937b187455e8d2d.jpg"/>
      <div className={classes.ava}>
        ava+discription
        <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"/>
      </div>
    </div>
  )
}

export default ProfileInfo