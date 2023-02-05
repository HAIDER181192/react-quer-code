import React from 'react'
export default function cartShow() {
  return (
    <div>
        {cart.length>0?(cart.map((ele)=>{
          return <>
          <div className='crd-details'>
            <img src={ele.images} />
            <p>{ele.tile}</p>
            <p>Rs.{ele.price}</p>
            <AiFillDelete  className='delte-icon' onClick={()=>{
            dispatch({
              type: "Remove from Cart",
              payload: ele,
            })
          }}/>
          </div>
          <Link className='btn btn-primary gotobtn mx-3 mt-0 mb-2' to='/cart'>Go to cart</Link>
          </>})
          ):(<p>Empty</p>)}
    </div>
  )
}
