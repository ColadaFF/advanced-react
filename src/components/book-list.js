import React, {
  useState,
  useEffect,
  useContext
} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Book from "./book-item";
import {
  findAllBooks,
  searchBooks
} from "../../lib/client";
import SearchContext from "../context/search";

const BookList = () => {
  const search = useContext(SearchContext);
  const [booksStatus, setBooksStatus] = useState({
    data: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    if (search.value === "") {
      findAllBooks()
        .then(setBooksStatus)
        .catch(setBooksStatus);
    } else {
      searchBooks(search.value)
        .then(setBooksStatus)
        .catch(setBooksStatus);
    }
  }, [search.value, setBooksStatus]);
  if (booksStatus.loading) {
    return <CircularProgress size={60} />;
  }
  return (
    <div style={{ paddingTop: 60 }}>
      {booksStatus.data.map(bookItem => (
        <Book book={bookItem} key={bookItem.id} />
      ))}
    </div>
  );
};

export default BookList;
