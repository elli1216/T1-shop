import React from "react";

const Category = ({id, title}) => {
  return (
    <div className='category-list' key={id}>{title}</div>
  );
}

export default Category;