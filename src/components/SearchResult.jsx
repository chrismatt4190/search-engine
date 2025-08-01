import React from 'react'
import "./SearchResult.css"

export const SearchResult = ({result}) => {

    return (
    <div className="search-result" onClick={(e) => alert('You clicked on ${result.product_item_name}')} 
    >
    {result.product_item_name}
    </div>
    );
};