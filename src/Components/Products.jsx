import React from 'react'
import { useGllobaldata } from '../Context/Context';

function Products(props) {
  let {prod}=props;
  let {state,dispatch}=useGllobaldata()
  let {cart}=state;
  
  return (
    <div className="col-sm-6 col-md-4 col-lg-3">
    <div class="card shadow mb-5">
      <img
        class="card-img-top"
        src={props.prod.images}
        alt="Card cap"
        style={{objectFit: "contain" }}
      />
      <div class="card-body">
        <h5 class="card-title">{props.prod.title}</h5>
        <p>
          {props.prod.price}$
        </p>
        {cart.some((item) => item.id === prod.id) ? (
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      dispatch({
                        type: "Remove from Cart",
                        payload: prod,
                      });
                    }}
                  >
                    Remove From Cart
                  </button>
                ) : (
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      dispatch({
                        type: "Add to Cart",
                        payload: prod,
                      });
                    }}
                  >
                    Add to Cart
                  </button>
                )}
      </div>
    </div>
  </div>
  )
}

export default Products
