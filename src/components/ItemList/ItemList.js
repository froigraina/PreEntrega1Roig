import React from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";

function ItemList(props) {
  const { product } = props;

  return (
    <div>
      {product.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <Item data={product} />
        </Link>
      ))}
    </div>
  );
}

export default ItemList;
