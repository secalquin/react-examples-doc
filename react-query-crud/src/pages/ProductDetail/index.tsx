import React from "react";
import { useParams } from "react-router-dom";
import { useProductById } from "../../hooks/useProductById";

type Props = {};

const ProductDetail = (props: Props) => {
  let { id } = useParams();
  const { useProductByIdQuery } = useProductById(Number(id));
  const { data, isLoading } = useProductByIdQuery;

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div></div>
      {"Product id: " + id} {JSON.stringify(data)}
    </div>
  );
};

export default ProductDetail;
