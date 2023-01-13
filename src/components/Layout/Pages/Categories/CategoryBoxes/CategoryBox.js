import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";

import "./CategoryBox.scss";

const CategoryBox = (props) => {
  return (
    <Link to={`/categories/${props.imagePath}`}>
      <Card
        hoverable
        style={{
          width: 320,
          margin: 5,
        }}
        cover={
          <img
            src={require(`../../../../Assets/Categories/CategoryBox/${props.imagePath}.jpg`)}
            alt={props.imageAlt}
          />
        }>
        <Meta title={props.title} description={props.description} />
      </Card>
    </Link>
  );
};

export default CategoryBox;
