import React from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";

type Props = {};

const Home = (props: Props) => {
  let navigate = useNavigate();
  const { useProductQuery } = useProduct();
  const { data, isLoading, isError, error } = useProductQuery;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  const handleClickShow = (productId: any) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div
      style={{
        width: "100%",

        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gridGap: "1rem",
      }}
    >
      {data?.map((product: any) => (
        <div
          key={product.id}
          style={{
            width: "300px",
            height: "450px",
            border: "1px solid black",
            margin: "5px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() => handleClickShow(product.id)}>show</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
