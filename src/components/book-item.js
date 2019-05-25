import React from "react";
import { jsx } from "@emotion/core";
import Paper from "@material-ui/core/Paper";

const Book = ({ book }) => {
  return (
    <Paper css={{ marginTop: 10 }}>
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "140px 1fr",
          gridGap: 20
        }}
      >
        <div
          css={{
            width: 140
          }}
        >
          <img
            src={book.coverImageUrl}
            alt={`${book.title} book-cover`}
            css={{ maxHeight: "100%", maxWidth: "100" }}
          />
        </div>
        <div css={{ flex: 1 }}>
          <div>{book.title}</div>
        </div>
      </div>
    </Paper>
  );
};

export default Book;
