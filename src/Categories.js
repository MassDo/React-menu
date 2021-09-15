import React from "react";

const Categories = ({ category, filterByCat }) => {
  return (
    <button className="filter-btn" onClick={() => filterByCat(category)}>
      {category}
    </button>
  );
};

export default Categories;
