import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() => ({
  searchBar: {
    marginTop: '10px',
  }
}));

const SearchBar = () => {
  const classes = useStyles();
  const [query, handleQuery] = React.useState("");

  const handleSubmitQuery = () => {
    console.log(query)
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <div className={classes.searchBar}>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Search</InputLabel>
        <OutlinedInput
          type='text'
          value={query}
          onChange={e => handleQuery(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle"
                onClick={handleSubmitQuery}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                <SearchIcon/>
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    </div>
  );
}

export default SearchBar;