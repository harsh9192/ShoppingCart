import React from 'react';
import { Link } from 'react-router-dom';

const WishList = ({wishlist, setWishList}) => {
  return (
    <>
      <div className="container my-5" style={{width:"54%"}}>
        {
            wishlist.length == 0? (
                <>
                <div className="text-center">
                    <h1>Your WishList is Empty</h1>
                    <Link to={"/"} className="btn btn-primary">Continue Shopping...</Link>
                </div>
                </>

            ) :
        wishlist.map((product) => {
          return (
            <>
              <div className="card mb-3 my-5" style={{ width: "700px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={product.image} className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body text-center">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">
                        {product.description}
                      </p>
                      <button className="btn btn-primary mx-1 my-3"> $ {product.price}</button>
                  <button className="btn btn-warning" >Buy Now</button> 
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}

      
      </div>
      {
            wishlist.length !=0 && (
                <div className="container text-center my-5" style={{
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                  }}>
                    <button className="btn btn-warning mx-5">CheckOut</button>
                    <button  onClick={()=>setWishList("")} className="btn btn-danger">Clear WishList</button>
                  </div>
            )
        }
      
    </>
  );
};

export default WishList
