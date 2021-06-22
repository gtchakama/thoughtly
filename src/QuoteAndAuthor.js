import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
  root2: {
    flexGrow: 1,
  },
  footer: {
    display: "flex",
  },
  footerItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0px 40px",
  },
  footerItemItem: {
    margin: "10px",
  },
  paper: {
    width: "auto",
    padding: theme.spacing(2),
    textAlign: "left",
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
      className={classes.root2}
      style={{ padding: "200px", width: "auto" }}
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
            <Typography variant="h5" gutterBottom id="quote">
              "{props.quote}"
            </Typography>

            <Typography variant="body2" gutterBottom id="author">
              --{props.author ? props.author : "Unknown"}--
            </Typography>

            <div className={classes.footer}>
              <div style={{ flexGrow: 3 }}>
                <Button
                  style={{ backgroundColor: randomColor }}
                  id="newquote"
                  onClick={props.handleClick}
                >
                  NEXT
                </Button>
              </div>

              <div className={classes.footerItem}>
                <GitHubIcon className={classes.footerItem} />
                <TwitterIcon />
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
