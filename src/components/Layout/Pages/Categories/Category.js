import React from "react";

import CategoryBox from "./CategoryBoxes/CategoryBox";
import "./Category.scss";
import { categoryData } from "./categoryData";

const Category = () => {
  const categoryBox = categoryData.map((e) => {
    return (
      <CategoryBox
        key={e.id}
        imageAlt={e.imageAlt}
        description={e.description}
        title={e.name}
        imagePath={e.imagePath}
      />
    );
  });

  return (
    <div className="category_main_container">
      <div className="category_main_container-title">
        <h1>Product Categories</h1>
      </div>
      <div className="category_main_container-categoryBox">{categoryBox}</div>
    </div>
  );
};

export default Category;
