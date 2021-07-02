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
        addPost={addPost}

        updatePostText={updatePostText}/>
    </>
  )
}

export default Profile