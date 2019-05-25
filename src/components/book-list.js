import React, {
  useState,
  useEffect,
  useContext
} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  findAllBooks,
  searchBooks
} from "../../lib/client";
import SearchContext from "../context/search";

const Book = React.lazy(() => import("./book-item"));

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

    return () => {
      // clean up
    };
  }, [search.value, setBooksStatus]);
  if (booksStatus.loading) {
    return <CircularProgress size={60} />;
  }
  return (
    <React.Suspense fallback={<CircularProgress />}>
      <div style={{ paddingTop: 60 }}>
        {booksStatus.data.map(bookItem => (
          <Book book={bookItem} key={bookItem.id} />
        ))}
      </div>
    </React.Suspense>
  );
};

export default BookList;
