import React from "react";
import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";

const CategoryProducts = () => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }>
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};

export default CategoryProducts;
