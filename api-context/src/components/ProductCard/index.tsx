import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Product } from "../../types";
import { useNavigate } from "react-router-dom";
import { sliceStringToLength } from "../../utils/sliceString";

type Props = {
  product: Product;
  addToCart: (item: Product) => void;
};

const ProductCard = ({ product, addToCart }: Props) => {
  const navigate = useNavigate();

  return (
    <>
      <Grid item xs={12} sm={6} md={4} xl={3}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: "56.25%",
            }}
            image={product.image}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h6">
              {product.title}
            </Typography>
            <Typography>
              {sliceStringToLength(product.description, 30)}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                navigate(`/product/${product.id}`);
              }}
            >
              View
            </Button>
            <Button
              size="small"
              onClick={() => {
                addToCart({
                  id: "1",
                  title: "",
                  price: 0,
                  category: "",
                  description: "",
                  image: "",
                  rate: {
                    rate: 0,
                    count: 0,
                  },
                  stock: 0,
                });
              }}
            >
              Add to cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default ProductCard;
