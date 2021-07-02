import './App.css';
import { Route } from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from "./components/Messages/Messages";
import Sidebar from "./components/Sidebar/Sidebar";

function App(props) {
  const { state, addPosts, updatePostText } = props
  const { sidebar, messages, profile } = state

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Sidebar activeFriends={sidebar.activeFriends}/>
      <div className="app-wrapper-content">
        <Route
          // exact
          path="/messages"
          render={() => <Messages dataMessages={messages.dataMessages}/>}
        />
        <Route
          // exact
          path="/profile"
          render={() => <Profile
            posts={profile.posts}
            dispatch={props.dispatch}
            newPostText={profile.newPostText}
          />}
        />
        <Route
          // exact
          path="/news"
          render={() => 'News'}
        />
        <Route
          // exact
          path="/music"
          render={() => 'Music'}
        />
        <Route
          // exact
          path="/books"
          render={() => 'books'}
        />
        <Route
          // exact
          path="/films"
          render={() => 'films'}
        />
        <Route
          // exact
          path="/settings"
          render={() => 'settings'}
        />
      </div>
    </div>
  );
}

export default App;
