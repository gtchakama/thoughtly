import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    padding: "50px 300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
  },
  grid: {
    border: "2px solid black",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Title</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Thouhgt</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>

        <Grid item xs={3}>
          <Button variant="contained" color="primary">
            Next
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
