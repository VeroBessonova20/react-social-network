import classes from './Profile.module.css';

const Profile = () => {
  return (
    <div className={classes.content}>
      <img src='https://i.pinimg.com/originals/cd/98/4d/cd984ddfa74df2014937b187455e8d2d.jpg'/>
      <div>
        ava+discription
        <img src='https://lh3.googleusercontent.com/proxy/IOpsEl_6Jw5qdSQeZsof7fSJnTXdsCyqDp6YgH5EckA4e5bIdGAtv_0Mld88lTB8ChRBi3xlK0tl4aVmUWmjyTfNkHaJPJmlFKYDrpDR845Cwd1pucfKfT7TRgqKlKpqJ94TmEbZSjNRIIIysDO0tVKM'/>

      </div>
      <div className={classes.post}>
        My post
        <div className={classes.item}>New Post</div>
        <div className={classes.item}>Post 1</div>
        <div className={classes.item}>Post 2</div>
        <div className={classes.item}>Post 3</div>
      </div>
    </div>
  )
}

export default Profile