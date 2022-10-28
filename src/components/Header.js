import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <h1>BOOKIE</h1>
      </div>
    </header>
  );
};

export default Header;
