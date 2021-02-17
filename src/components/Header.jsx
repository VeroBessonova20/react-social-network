import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img src='data:image/png;base64,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'/>
    </header>
  )
}

export default Header