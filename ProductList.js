import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductList = ({ cart, setCart , wishlist, setWishList}) => {
  const addToCart = (product) => {
    // console.log(product);
    setCart([...cart, product]);

    toast.success(" Item added on cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });
  };

  const addToWishList = (product) => {
    // console.log(product);
    setWishList([...wishlist, product]);

    toast('Item added on WishList', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      // console.log(response);
      setProduct(response.data);
    });
  }, []);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        // transition: Bounce
      />
      <div className="container my-5">
        <div className="row">
          {product.map((items) => {
            return (
              <>
                <div className="col-lg-4 col-md-6 my-3 text-center">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={items.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{items.title}</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quae laboriosam placeat! Read More...
                      </p>
                      <button className="btn btn-primary mx-2">
                        {" "}
                        $ {items.price}
                      </button>
                      <button
                        onClick={() => addToCart(items)}
                        className="btn btn-warning my-2 "
                      >
                        Add to Cart
                      </button>
                      <button onClick={() => addToWishList(items)} 
                      className="btn btn-success mx-1">
                        wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};


export default ProductList;
