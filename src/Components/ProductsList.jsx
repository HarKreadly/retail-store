import React, { useEffect, useState } from "react";
import Products from "./Products";

export default function ProductsList() {
  const [productsList, setProductsList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [CategoryList, setCategory] = useState([]);
  const [searchCatValue, setSearchCatValue] = useState("");

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProductsList(data))
      .catch((error) => console.log("Error Fetching Products:", error));
  };
  const getCategory = () => {
    fetch ("https://fakestoreapi.com/products/categories")
    .then(response => response.json())
    .then(data => setCategory(data))
    .catch(error => console.log("Error Fetching Category", error))
  }
  useEffect(() => {
    getProducts();
    getCategory();
  }, []);



  const handleSearch = () => {
    const searchValue = document.querySelector("#search").value;
    const searchCategory = document.querySelector("#category").value;
    setSearchValue(searchValue);
    setSearchCatValue(searchCategory);
  };

  const displayProducts = () => {
    const filtered = productsList.filter((product) => {
      const matchesCategory = searchCatValue 
      ? product.category.toLowerCase().includes(searchCatValue.toLowerCase()) 
      : true;
    
      const matchesSearch = searchValue 
      ? product.title.toLowerCase().includes(searchValue.toLowerCase())||
        product.description.toLowerCase().includes(searchValue.toLowerCase())
      : true;

      return matchesCategory && matchesSearch
    });

    if (filtered.length > 0){
    return filtered.map((product) => {
      return <Products product={product}  />;
    });
    } else {
      return(
        <div className="grid bg-gray-800 border border-red-600 h-32 text-center items-center text-red-500 my-2 rounded">No Items</div>
      )
    }
  };

  return (
    <div className="text-sm container mx-auto">
        <div className="mx-4">
        <h1>Searchy</h1>

          <form onSubmit={(e)=>{e.preventDefault()}}>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-2.5 pointer-events-none ">
                <box-icon name="search" color="gray"></box-icon>
              </div>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-s-lg focus:ring-blue-500 focus:border-blue-500 w-1/3 ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleSearch} type="text" id="search" placeholder="Search" />
              
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-e-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleSearch} id="category">
              <option value="">All</option>
              {CategoryList.map((category)=> {
                return <option value={category}>{category}</option>
                })}
            </select>
            <input className="btn " onClick={()=> {setSearchValue(""); setSearchCatValue("")}} type="reset" />
            </div>
          </form>
        </div>
      
      <div className="mx-4">
      <h2>Products:</h2>
        <div className="grid bg-slate-50 grid-cols-7 text-center rounded h-10 items-center">
          <div>ID</div>
          <div>Image</div>
          <div>Title</div>
          <div>Description</div>
          <div>Price</div>
          <div>Category</div>
          <div>Rating</div>
        </div>

        <div>
          {displayProducts()}
        </div>
      </div>
    </div>
  );
}
