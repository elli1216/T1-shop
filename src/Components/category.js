import React from "react";

const Category = ({id, title, onCategoryClick}) => {
  return (
    <div className='category-list' key={id} onClick={() => onCategoryClick(id)}>{title}</div>
  );
}

export default Category;