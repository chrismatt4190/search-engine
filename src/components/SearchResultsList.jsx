import React from "react";
import "./SearchResultsList.css";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, idx) => (
        <div className="result-card" key={result.product_item_name || idx}>
          <h2 className="product-item-name">{idx + 1}. {result.product_item_name}</h2>

          <p className="business-address">
            <span className="description-label">Address:</span> {result.location.display_address}
          </p>

          <p className="business-name">
            <span className="description-label">Business Name:</span> {result.business_name}
          </p>

          <p className="product-description">
            <span className="description-label">Item Description:</span> {result.product_description}
          </p>

          {result.price && (
            <p className="price">
              <span className="description-label">Price:</span> ${parseFloat(result.price).toFixed(2)}
            </p>
          )}

          <p className="why-picked">
            <span className="description-label">Why we picked this for you:</span> This item is a great choice if you're craving {result.product_category?.toLowerCase() || 'something tasty'}
            {result.common_product_keyword ? ` in a setting known for its ${result.common_product_keyword.toLowerCase()}.` : '.'}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
};
