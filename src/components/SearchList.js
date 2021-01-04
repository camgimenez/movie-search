import React from 'react'
import Card from '../components/Card';

function SearchList({ results }) {
    let data = [];
    if (results.data) {
        data = results.data.Search || [];
    }
    return (
        <div className="search__list">
            {data.map((item) => (
                <Card key={item.imdbID} movie={item} 
                /> 
            ))}

        </div>
    )
}

export default SearchList
