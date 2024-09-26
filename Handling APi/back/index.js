import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "Wood", price: 10, image: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'},
    { id: 2, name: "Metal", price: 20 image:'https://images.unsplash.com/photo-1576158113928-4c240eaaf360?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'},
    { id: 3, name: "Glass", price: 30 image:'https://images.unsplash.com/photo-1576158114131-f211996e9137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D'},
    { id: 4, name: "Porcelain", price: 40 image:'https://plus.unsplash.com/premium_photo-1672116453187-3aa64afe04ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'},
    { id: 5, name: "Sunrise", price: 50 image:'https://plus.unsplash.com/premium_photo-1687382111414-7b87afa5da34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGltYWdlfGVufDB8fDB8fHww'},
    { id: 6, name: "Sunset", price: 60 image:'https://images.unsplash.com/photo-1579544787614-fa683917e045?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGltYWdlfGVufDB8fDB8fHww'},
    { id: 7, name: "Sky", price: 70 image:'https://images.unsplash.com/photo-1578589385251-045f05a6faa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGltYWdlfGVufDB8fDB8fHww'},
    { id: 8, name: "Metal Chair", price: 80 image:'https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlfGVufDB8fDB8fHww'},
  ];

  if (req.quesry.search) {
    const filterProducts = products.filter(product => product.name.includes(req.quesry.search))
  }

  setTimeout(() => {
    res.send(products)
  }, 3000);

});

const port = prccess.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
