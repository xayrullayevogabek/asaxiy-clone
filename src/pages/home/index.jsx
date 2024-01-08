import React, { useEffect, useState } from "react";
import Banner from "../../components/banner/banner";
import axios from "axios";
import "./index.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [discountProducts, setDiscountProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );

        const sortedData = Object.values(
          data.products.reduce((acc, product) => {
            const category = product.category;
            if (!acc[category]) {
              acc[category] = {
                categoryName: category,
                data: [product],
              };
            } else {
              acc[category].data.push(product);
            }
            return acc;
          }, {})
        );
        setProducts(sortedData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const randomDiscountProducts =
        products[Math.floor(Math.random() * products.length)].data;
      setDiscountProducts(randomDiscountProducts);
    }
  }, [products]);

  return (
    <div className="conatiner">
      <Banner discountProducts={discountProducts}/>
    </div>
  );
};

export default Home;
