import {React, useState } from 'react'

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

    return (
        <div className="search">
            <input className="search__input"
                onChange={handleInput}
                onKeyPress={handleEnterKeyPressed}
                type="text"
                value={searchText}
                placeholder="Search for a movie" />
        </div>
    )
}

export default SearchBar
