import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import SearchContext from "../context/search";

const useStyles = makeStyles({
  title: {},
  search: {},
  searchIcon: {},
  inputRoot: {},
  inputElement: {}
});

const NavBar = () => {
  const classes = useStyles();
  const { value, setValue } = useContext(SearchContext);
  return (
    <AppBar>
      <ToolBar>
        <Typography
          variant="h6"
          noWrap
          className={classes.title}
        >
          BookShelf
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Búsqueda ..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputElement
            }}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </div>
      </ToolBar>
    </AppBar>
  );
};

export default NavBar;
