import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products");
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } 
      catch (error) {
        setError(true);
        //console.error(error);
        setLoading(false);
      }
    })();
  }, []);

  if (error) {
    return <h2>Something went wrong while fetching products</h2>;
  }

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1>Learning Few API Topics Probably From Axios</h1>
      <h2>Number of Products are: {products.length}</h2>
    </>
  );
}

export default App;
