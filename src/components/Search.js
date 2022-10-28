import classes from "./Search.module.css";

const Search = (props) => {
  const searchHandler = (e) => {
    props.setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(props.search);
    props.loading(true);
    const timer = setTimeout(() => {
      props.loading(false);
      props.setSearch("");
    }, 2000);
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler} className={classes.search}>
        <input
          value={props.search}
          onChange={searchHandler}
          className={classes.input}
          type="search"
          placeholder="Search"
        />
        <button type="submit" className={classes.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
