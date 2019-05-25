import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Book from "./book-item";
import { findAllBooks } from "../../lib/client";

const BookList = () => {
  const [booksStatus, setBooksStatus] = useState({
    data: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    findAllBooks()
      .then(response =>
        setBooksStatus({
          loading: false,
          error: null,
          data: response.data.findAllBooks
        })
      )
      .catch(error =>
        setBooksStatus({
          error,
          data: [],
          loading: false
        })
      );
  }, []);
  if (booksStatus.loading) {
    return <CircularProgress size={60} />;
  }
  return booksStatus.data.map(bookItem => (
    <Book book={bookItem} key={bookItem.id} />
  ));
};

export default BookList;
