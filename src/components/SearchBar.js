import { React, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

function SearchBar(props) {
    const { onSearch } = props;

    const [searchText, setSearchText] = useState('');


    const handleInput = (e) => {
        const txt = e.target.value;
        setSearchText(txt);
    }

    const handleEnterKeyPressed = (e) => {
        if (e.key === "Enter") {
            onSearch(searchText);
        }
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField
                id="outlined-full-width"
                label="Search Movie"
                style={{ margin: 50}}
                placeholder="Movie Title"
                helperText="ie: Inception"
                onChange={handleInput}
                onKeyPress={handleEnterKeyPressed}
                fullWidth
                value={searchText}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
        </div>
    )
}

export default SearchBar
