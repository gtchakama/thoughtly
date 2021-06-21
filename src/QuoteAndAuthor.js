import React from "react";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function QuoteAndAuthor(props) {
  const classes = useStyles();
  const randomColor = props.displayColor();
  const html = document.documentElement;
  html.style.backgroundColor = randomColor;
  return (
    <Container
      className={classes.root}
      style={{ backgroundColor: "white" }}
      className="root"
    >
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          className="fadeIn"
          key={Math.random()}
          style={{ color: randomColor }}
        >
          <Paper className={classes.paper}>
            <h1 id="quote">"{props.quote}"</h1>
            <h5 id="author">-{props.author ? props.author : "Unknown"}-</h5>
          </Paper>
        </Grid>

        <Grid item>
          <Button
            style={{ backgroundColor: randomColor }}
            id="newquote"
            onClick={props.handleClick}
          >
            NEXT
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
