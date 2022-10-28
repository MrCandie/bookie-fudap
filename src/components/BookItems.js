import { useState, useEffect } from "react";
import classes from "./Book.module.css";

const BookItems = (props) => {
  const [books, setBooks] = useState([]);
  const proxy = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    props.loading(true);
    try {
      const response = await fetch(
        `${proxy}https://fudap-books-api.herokuapp.com/books/`
      );
      // console.log(response);
      if (!response.ok) throw new Error("Something went wrong, Try Later!");

      const data = await response.json();
      // console.log(data);
      const bookStore = data.map((dat) => {
        return {
          id: dat.id,
          image: dat.imgUrl,
          title: dat.title,
          author: dat.author,
          description: dat.description,
          pages: dat.pages,
        };
      });
      setBooks(bookStore);
    } catch (err) {
      props.setError(err.message);
    }
    props.loading(false);
  };

  // console.log(props.search);
  const searchValue = props.search;

  //searching
  const filteredBook = books.find((book) => book.title.includes(searchValue));
  // console.log(filteredBook);

  //   return (
  //     <ul className={classes.lister}>
  //       {filteredBook.map((book) => (
  //         <li className={classes.list} key={book.id}>
  //           <img className={classes.img} src={book.image} />
  //           <p className={classes.title}>{book.title}</p>
  //           <p className={classes.author}>{book.author}</p>{" "}
  //           <p className={classes.description}>{book.description} </p>
  //           <p className={classes.page}>{book.pages} Pages</p>
  //           <button className={classes.button}>READ</button>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

  return (
    <ul className={classes.lister}>
      {books.map((book) => (
        <li
          accessibilitylabel="books"
          testid="book"
          className={classes.list}
          key={book.id}
        >
          <img className={classes.img} src={book.image} />
          <p className={classes.title}>{book.title}</p>
          <p className={classes.author}>{book.author}</p>{" "}
          <p className={classes.description}>{book.description} </p>
          <p className={classes.page}>{book.pages} Pages</p>
          <button className={classes.button}>READ</button>
        </li>
      ))}
    </ul>
  );
};
export default BookItems;
