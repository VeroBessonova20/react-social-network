import cls from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={cls.nav}>
      <div className={`${cls.item} ${cls.active}`}>
        <a href="/">Profile</a>
      </div>
      <div className={`${cls.item} ${cls.active}`}>
        <a href="/">Messages</a>
      </div>
      <div className={`${cls.item} ${cls.active}`}>
        <a href="/">News</a>
      </div>
      <div className={`${cls.item} ${cls.active}`}>
        <a href="/">Music</a>
      </div>
      <div className={`${cls.item} ${cls.active}`}>
        <a href="/">Books</a>
      </div>
      <div className={`${cls.item} ${cls.active}`}>
        <a href="/">Films</a>
      </div>
      <div className={`${cls.item} ${cls.active}`}>
        <a href="/">Settings</a>
      </div>
    </nav>
  )
}

export default Navbar