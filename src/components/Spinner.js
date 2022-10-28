import classes from "./Spinner.module.css";
const Spinner = () => {
  return (
    <div
      testid="books"
      accessibilitylabel="App is loading books"
      className={classes.container}
    >
      App is loading books...
    </div>
  );
};

export default Spinner;
