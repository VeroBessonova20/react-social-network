import cls from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={cls.nav}>
      <div className={`${cls.item} ${cls.active}`}>
        <NavLink to="/profile" activeClassName={cls.active}>Profile</NavLink>
      </div>
      <div className={`${cls.item} ${cls.active}`}>
        <NavLink to="/messages" activeClassName={cls.active}>Messages</NavLink>
      </div>
      <div className={`${cls.item} ${cls.active}`}>
        <NavLink to="/new" activeClassName={cls.active}>News</NavLink>
      </div>
      <div className={`${cls.item} ${cls.active}`}>
        <NavLink to="/music" activeClassName={cls.active}>Music</NavLink>
      </div>
      <div className={`${cls.item} ${cls.active}`}>
        <NavLink to="/books" activeClassName={cls.active}>Books</NavLink>
      </div>
      <div className={`${cls.item} ${cls.active}`}>
        <NavLink to="/films" activeClassName={cls.active}>Films</NavLink>
      </div>
      <div className={`${cls.item} ${cls.active}`}>
        <NavLink to="/settings" activeClassName={cls.active}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default Navbar