import { useEffect, useState } from "react";
import './styles.css'
export default function LoadMore() {
  const [loading, setloading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  async function fetchProducts() {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();
      console.log(result);

      if (result && result.products && result.products.length > 0) {
        setProducts((previousData) => [...previousData, ...result.products]);
        setloading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if(products && products.length === 100) setDisable(true)
  },[products]);

  if (loading) {
    return <div>Loading data! please wait</div>;
  }
  return (
    <div className="load-more-container">
        <div className="product-container">
      {products && products.length > 0
        ? products.map((item) => <div className="product" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
        </div>)
        : null}
        </div>
        <div className="button-container">
            <button disabled={disable} onClick={() => setCount(count + 1)}>Load more</button>
        </div>
    </div>
  );
}
