import React, {
  useState,
  useEffect,
  useContext
} from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { from } from "rxjs";
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
    let subscription;
    if (search.lastValue === "") {
      const promise = findAllBooks();
      subscription = from(promise).subscribe(
        setBooksStatus,
        setBooksStatus
      );
    } else {
      const promise = searchBooks(search.lastValue);
      subscription = from(promise).subscribe(
        setBooksStatus,
        setBooksStatus
      );
    }

    return () => {
      // clean up
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [search.lastValue, setBooksStatus]);
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
