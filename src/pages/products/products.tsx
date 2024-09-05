import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();
  const handleClick = (selectedItem: Product) => {
    const filter = products.filter((item) => item.title === selectedItem.title);
    console.log(filter, "SELECTED ITEM");
    // if (filter) {
    //  navigate ("/cart");
    // }
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {products.map((item, index) => (
        <div
          key={index}
          style={{
            padding: "20px",
            border: "1px solid #e5e7eb",
            margin: "10px",
            borderRadius: "8px",
          }}
        >
          <h5>{item.title}</h5>
          <div>Price: ${item.price}</div>
          <div>Description: {item.description}</div>
          <div>Category: {item.category}</div>
          <img src={item.image} alt={item.title} style={{ width: "100px" }} />
          <div>
            Rating: {item.rating.rate} ({item.rating.count} reviews)
          </div>
          <Button
            onClick={() => {
              handleClick(item);
            }}
            variant="contained"
          >
            Add to cart
          </Button>
        </div>
      ))}
    </>
  );
};

export default ProductPage;
