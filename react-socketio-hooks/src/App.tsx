import React from "react";
import "./App.css";
import { useNotification } from "./hooks/useNotification";
import { useProduct } from "./hooks/useProduct";

function App() {
  const { getProducts, loading, error, products } = useProduct();
  const { notifications } = useNotification();

  React.useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {!loading &&
          notifications?.map((notification) => (
            <ul key={notification.id} style={{ listStyleType: "none" }}>
              <li>{notification.title}</li>
              <li>{notification.color}</li>
            </ul>
          ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {loading && <p>Loading...</p>}
        {error && <p>Something went wrong</p>}

        {!loading &&
          products?.map((product) => (
            <div
              key={product.id}
              style={{
                width: "200px",
                minHeight: "200px",
                border: "2px solid",
                margin: "10px",
                padding: "10px",
              }}
            >
              <h1>{product.title}</h1>
              <p>{product.description}</p>
              {/* <img src={product.image} alt={product.title} />*/}
              <p>{product.price}</p>
              <button>Add to cart</button>
            </div>
          ))}
      </div>
    </>
  );
}
export default App;
