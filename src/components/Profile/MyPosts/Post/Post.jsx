import classes from './Post.module.css';

const Post = (props) => {
  return (
    <>
      <div className={classes.item}>
        <img alt="avatar" src="https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg"/>
        {props.message}
        <div>
          <span>{`like ${props.countLike}`}</span>
        </div>
      </div>
    </>
  )
}

export default Post