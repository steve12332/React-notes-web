import React from "react";
import {MdSearch} from 'react-icons/md';

const Search = ({handleSearchNote}) => {
    return (
        <div className="search">
            <MdSearch className="search-icon" size='1.3em'></MdSearch>
            <input type='text' placeholder="type to search..." onChange={(event)=>handleSearchNote(event.target.value)}></input>
        </div>
    );
};

export default Search;