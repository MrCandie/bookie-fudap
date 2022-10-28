import { useState } from "react";
import classes from "./Book.module.css";
import BookItems from "./BookItems";
import Spinner from "./Spinner";
import Search from "./Search";

const Book = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const errMsg = error;

  return (
    <div>
      <Search setSearch={setSearch} search={search} loading={setIsLoading} />
      <main className={classes.main}>
        {isLoading && !error && <Spinner />}
        <BookItems loading={setIsLoading} search={search} setError={setError} />
        {error && <p className={classes.load}>{errMsg}</p>}
      </main>
    </div>
  );
};

export default Book;

// {!isLoading && <BookItems loading={setIsLoading} search={search} />}
// {isLoading && <Spinner />}
