import React from  'react'
import { useGllobaldata } from '../Context/Context';
import {AiFillDelete} from 'react-icons/ai'
function Cart({ele}) {
  let {state,dispatch}=useGllobaldata()
  let {cart}=state;
  return (
    <>
    {cart.length>0?(cart.map((ele)=>{
      return <>
      <div className='crd-details'>
        <img src={ele.images}style={{ width: '80px', height : '80px',borderRadius:'100%'}} />
        <p>{ele.title}</p>
        <p>Rs.{ele.price}</p>
        <AiFillDelete style={{color:'red'}} className='delte-icon' onClick={()=>{
        dispatch({
          type: "Remove from Cart",
          payload: ele,
        })
      }}/>
      </div>
      </>})
      ):(<p>Empty</p>)}
      </>
   
  )
}

export default Cart
