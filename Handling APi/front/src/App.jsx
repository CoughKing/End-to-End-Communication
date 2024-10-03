import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  //const [products, error, loading] = customReactQuery("/api/products");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)) {
          console.log('Request cancelled', error.message)
          return
        }
        setError(true);
        //console.error(error);
        setLoading(false);
      }
    })();
    return () => {
      controller.abort()
    }

  }, [search]);

  // if (error) {
  //   return <h2>Something went wrong while fetching products</h2>;
  // }

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }

  return (
    <>
      <h1>Learning Few API Topics Probably From Axios</h1>
      <input type="text" placeholder="Search" 
      value={search}
      onChange={(e) => setSearch(e.target.value)}  // search functionality added
      />
      {loading && <h1>Loading.....</h1>}
      {error && <h1>Something went wrong while fetching products</h1>}

      <h2>Number of Products are: {products.length}</h2>
    </>
  );
}

export default App;

// const customReactQuery = (urlPath) => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     (async () => {
//       try {
//         setLoading(true);
//         setError(false);
//         const response = await axios.get(urlPath);
//         console.log(response.data);
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         //console.error(error);
//         setLoading(false);
//       }
//     })();
//   }, []);

//   return [products, error, loading];
// };
