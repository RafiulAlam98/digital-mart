import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [displayProduct, setDisplayProduct] = useState([]);
  const [page, setPage] = useState("shop");
  const size = 9;

  useEffect(() => {
    fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProduct(data);
      });
  }, []);

  return [products, displayProduct, setDisplayProduct];
};

export default useProducts;
