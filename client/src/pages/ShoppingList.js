import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import API from "../utils/API";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 330,
    height: 530,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
  },
  button: {
    margin: theme.spacing(0.5, 0),
    color: "white !important",
    backgroundColor: "rgb(96,153,124)",
  },
  heading: {
    textAlign: "center",
  },
}));

export default function TransferList() {
  const classes = useStyles();
  const [left, setLeft] = React.useState([]);
  const [right, setRight] = React.useState([]);

  useEffect(() => {
    API.getShoppingList()
      .then((res) => {
        setLeft(res.data.map((x) => ({ ...x, checked: false })));
      })
      .catch((err) => console.log(err));
  }, []);

  const numberOfChecked = (items) =>
    items.map((x) => x.checked).filter(Boolean).length;

  const handleToggleAll = (items) => () => {
    console.log("handleToggleAll");
    if (numberOfChecked(items) === items.length) {
      items.map((x) => (x.checked = false));
      setLeft([...left]);
    } else {
      items.map((x) => (x.checked = true));
      setLeft([...left]);
    }
  };

  const customList = (title, items) => (
    //console.log("items are ", items),
    console.log("number of checked ", numberOfChecked(items)),
    console.log("items length ", items.length),
    console.log(numberOfChecked(items) === items.length && items.length !== 0),
    (
      <Card>
        <CardHeader
          className={classes.cardHeader}
          avatar={
            <Checkbox
              onClick={handleToggleAll(items)}
              checked={
                numberOfChecked(items) === items.length && items.length !== 0
              }
              indeterminate={
                numberOfChecked(items) !== items.length &&
                numberOfChecked(items) !== 0
              }
              disabled={items.length === 0}
              inputProps={{ "aria-label": "all items selected" }}
            />
          }
          action={
            <IconButton aria-label="settings">
              <DeleteForeverIcon />
            </IconButton>
          }
          title={title}
          subheader={`${numberOfChecked(items)}/${items.length} selected`}
        />
        <Divider />
        <List className={classes.list} dense component="div" role="list">
          {items.map((value, index) => {
            const labelId = `transfer-list-all-item-${value.ingrediates}-label`;

            return (
              <ListItem
                key={value.ingrediates + index}
                role="listitem"
                button
                onClick={() => {
                  //debugger;
                  value.checked = !value.checked;
                  setLeft([...left]);
                }}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={value.checked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${value.ingrediates}`} />
              </ListItem>
            );
          })}
          <ListItem />
        </List>
      </Card>
    )
  );

  return (
    <>
      <Typography className={classes.heading} color="textPrimary" variant="h2">
        Shopping List
      </Typography>
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>{customList("Items to buy", left)}</Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button
              variant="outlined"
              size="large"
              className={classes.button}
              onClick={() => {
                setRight(right.concat(left.filter((x) => x.checked)));
                setLeft(left.filter((x) => !x.checked));
              }}
              disabled={left.filter((x) => x.checked).length === 0}
              aria-label="move selected right"
            >
              &gt;
            </Button>
            <Button
              variant="outlined"
              size="large"
              className={classes.button}
              onClick={() => {
                setLeft(left.concat(right.filter((x) => x.checked)));
                setRight(right.filter((x) => !x.checked));
              }}
              disabled={right.filter((x) => x.checked).length === 0}
              aria-label="move selected left"
            >
              &lt;
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList("Shopping Trolly", right)}</Grid>
      </Grid>
    </>
  );
}
