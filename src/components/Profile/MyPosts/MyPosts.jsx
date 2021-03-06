import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import { useRef } from "react";
import { addPostActionCreator, addUpdateNewPostActionCreator } from "../../../redux/profileReducer";

const MyPosts = (props) => {

  const textareaRef = useRef(null)

  const elementPosts = props.posts.map(post => (
    <Post key={post.id} message={post.posts} countLike={post.countLike}/>
  ))

  const addPost = () => props.dispatch(addPostActionCreator())

  const onChangePostText = () => {
    let text = textareaRef.current.value;
    const action = addUpdateNewPostActionCreator(text)
    props.dispatch(action)
  }

  return (
    <div className={classes.padding}>
      <h3>My post</h3>
      <div className={classes.create}>
        <textarea ref={textareaRef} value={props.newPostText} onChange={onChangePostText}/>
        <div className={classes.btnGroup}>
          <button onClick={addPost}>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      {elementPosts}
    </div>
  )
}

export default MyPosts