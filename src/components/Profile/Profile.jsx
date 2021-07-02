import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

const Profile = (props) => {
  const { posts, addPost, newPostText, updatePostText } = props

  return (
    <>
      <ProfileInfo />
      <MyPosts
        posts={posts}
        newPostText={newPostText}
        dispatch={props.dispatch}/>
    </>
  )
}

export default Profile