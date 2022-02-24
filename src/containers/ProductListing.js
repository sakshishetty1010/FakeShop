import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";

const ProductListing = () => {
  const products = useSelector((state) => state);
//   console.log(products);
    const dispatch = useDispatch();
  
  const fetchProducts = async() =>{
      const response = await axios.get("https://fakestoreapi.com/products").catch(err =>{
          console.log("Fetch Products error",err)
      });
    dispatch(setProducts(response.data));
  }

  useEffect(()=>{
    fetchProducts();
    console.log("Products :",products)
  },[])

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
  
  
};

export default ProductListing;
