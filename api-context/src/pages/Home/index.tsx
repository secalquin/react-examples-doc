import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <button
        onClick={() => {
          addToCart({
            id: 1,
            category: "category",
            description: "description",
            image: "image",
            name: "name",
            price: 1,
            quantity: 1,
          });
          navigate("/cart");
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Home;
