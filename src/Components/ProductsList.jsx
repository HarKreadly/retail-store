import React, { useEffect, useState } from "react";
import Products from "./Products";

export default function ProductsList() {
  const [productsList, setProductsList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductsList(data))
      .catch((error) => console.log("Error Fetching Products:", error));
  };

  useEffect(() => {
    getProducts();
  }, []);

  const displayProducts = () => {
    const filteredProducts = productsList.filter((product)=>{
      return (
        product.title.toLowerCase().includes(searchValue.toLowerCase())||
        product.description.toLowerCase().includes(searchValue.toLowerCase())||
        product.category.toLowerCase().includes(searchValue.toLowerCase()))
    })
    if (filteredProducts.length > 0){
    return filteredProducts.map((product) => {
      return <Products product={product}  />;
    });
    } else {
      return(
        <div className="grid bg-gray-800 border border-red-600 h-32 text-center items-center text-red-500 my-2 rounded">No Items</div>
      )
    }
  };

  return (
    <div className="container w-screen text-sm">
      <h2>Search</h2>
        <form onSubmit={(e)=>{e.preventDefault()}}>
          <input className="" onChange={(e) => setSearchValue(e.target.value)} type="text" id="searchInp" placeholder="Search" />
          <input className="btn btn-danger" onClick={()=> setSearchValue("")} type="reset" />
        </form>
      <h2>Products:</h2>
      <div>
        <div>
          <div className="grid bg-slate-50 grid-cols-7 text-center rounded">
            <div>ID</div>
            <div>Image</div>
            <div>Title</div>
            <div>Description</div>
            <div>Price</div>
            <div>Category</div>
            <div>Rating</div>
          </div>
        </div>
        <div>
          {displayProducts()}
        </div>
      </div>
    </div>
  );
}
