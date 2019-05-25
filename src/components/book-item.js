import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { jsx } from "@emotion/core";
import { Row, Col } from "react-flexbox-grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    display: "flex",
    margin: 10
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    minWidth: 140
  }
});

const Book = ({ book }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={book.coverImageUrl}
        title={book.title}
      />
      <div className={classes.details}>
        <CardContent>
          <Typography variant="h5">{book.title}</Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
          >
            {book.author}
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
          >
            {book.synopsis.substring(0, 500)} ...
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default Book;
