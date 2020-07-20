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
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import API from "../utils/API";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import { AwesomeButton, AwesomeButtonProgress } from "react-awesome-button";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    width: "100%",
    maxWidth: 860,
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(3),
  },
  divider: {
    height: 2,
    backgroundColor: "#000000",
    margin: theme.spacing(8, 2),
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    height: 530,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
  },
  awesomeButton: {
    display: "inline-block",
    alignSelf: "flex-end",
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
  const [formObject, setFormObject] = useState({});

  const numberOfChecked = (items) =>
    items.map((x) => x.checked).filter(Boolean).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      items.map((x) => (x.checked = false));
      setLeft([...left]);
    } else {
      items.map((x) => (x.checked = true));
      setLeft([...left]);
    }
  };

  const getShoppingList = () => {
    API.getShoppingList()
      .then((res) => {
        setLeft(res.data.map((x) => ({ ...x, checked: false })));
      })
      .catch((err) => console.log(err));
  };

  const deleteShoppingItem = (items) => () => {
    var deletedItems = items.filter((x) => x.checked);
    Object.values(deletedItems).forEach((element, index) => {
      //debugger;
      API.deleteShoppingList(element._id)
        .then(() => {
          //getShoppingList();
          setLeft(left.filter((x) => !x.checked));
          //setRight(right.filter((x) => x._id !== element._id));
          setRight(right.filter((x) => !x.checked));
        })
        .catch((err) => console.log(err));
    });
  };

  const addShoppingItem = () => {
    if (formObject) {
      API.createShoppngList({
        ingrediates: formObject.value.toUpperCase(),
      })
        .then((res) => {
          setFormObject({});
          getShoppingList();
        })
        .catch((err) => console.log(err));
    }
    formObject.value = "";
  };

  useEffect(() => {
    getShoppingList();
  }, []);

  const customList = (title, items) => (
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
          <IconButton aria-label="settings" onClick={deleteShoppingItem(items)}>
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
  );

  return (
    <>
      <Typography className={classes.heading} color="textPrimary" variant="h2">
        Shopping List
      </Typography>
      <div className={classes.root}>
        <div className={classes.section1}>
          <Grid
            container
            spacing={2}
            justify="center"
            alignItems="center"
            className={classes.root}
          >
            <Grid item xs={12} md={5}>
              {customList("Items to buy", left)}
            </Grid>
            <Grid item xs={12} md={2}>
              <Grid container direction="column" alignItems="center">
                <AwesomeButton
                  size="small"
                  type="link"
                  onPress={() => {
                    setRight(right.concat(left.filter((x) => x.checked)));
                    setLeft(left.filter((x) => !x.checked));
                  }}
                  disabled={left.filter((x) => x.checked).length === 0}
                >
                  &gt;
                </AwesomeButton>
                <AwesomeButton
                  size="small"
                  type="link"
                  onPress={() => {
                    setLeft(left.concat(right.filter((x) => x.checked)));
                    setRight(right.filter((x) => !x.checked));
                  }}
                  disabled={right.filter((x) => x.checked).length === 0}
                >
                  &lt;
                </AwesomeButton>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              {customList("Shopping Trolly", right)}
            </Grid>
          </Grid>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.section2}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={9} className={classes.textField}>
              <TextField
                fullWidth
                onChange={(event) => {
                  setFormObject(event.target);
                }}
                id="standard"
                label="Add your shopping items"
                autoFocus
                required
              />
            </Grid>
            <Grid item xs={12} sm={3} className={classes.awesomeButton}>
              <AwesomeButtonProgress
                loadingLabel="Adding your item.."
                resultLabel="Item added!"
                type="link"
                size="large"
                disabled={Object.keys(formObject).length === 0}
                action={(element, next) => {
                  addShoppingItem();
                  setTimeout(() => {
                    next();
                  }, 100);
                }}
              >
                Add shopping items
              </AwesomeButtonProgress>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
