import React from 'react'
//import { useContext, AppContext } from 'react'
import { Badge, Container, Dropdown, FormControl, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap'
import {FaShoppingCart} from 'react-icons/fa'
import { useGllobaldata } from '../Context/Context'
import {AiFillDelete} from 'react-icons/ai'
import { Link, Outlet } from 'react-router-dom'

function Header() {
  let {state, dispatch} = useGllobaldata()
    let {cart} = state
  return (
    <>
    <Navbar bg='dark' variant='dark'>
      <Container>
        <NavbarBrand>
          <NavLink to = '/' className='text-light text-decoration-none'>ShoopCart</NavLink>
        </NavbarBrand>
        <Navbar.Text>
          <FormControl placeholder='Search here'/>
        </Navbar.Text>
        <Nav>
         <Dropdown>
         <Dropdown.Toggle>
            <FaShoppingCart/>
            <Badge>{cart.length}</Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu align='end'>
            {cart.length>0?(cart.map((ele)=>{
          return <>
          <div className='crd-details'>
            <img src={ele.images} style={{ width: '60px', height : '60px',borderRadius:'50%'}}/>
            <p>{ele.title}</p>
            <p>Rs.{ele.price}</p>
            <AiFillDelete style={{colo:'redn'}}  className='delte-icon' onClick={()=>{
            dispatch({
              type: "Remove from Cart",
              payload: ele,
            })
          }}/>
          </div>
        <hr></hr>
          </>})
          ):(<p>Empty</p>)}
                    <Link className='btn btn-primary gotobtn mx-3 mt-0 mb-2' to='/cart'>Go to cart</Link>
          </Dropdown.Menu>
          </Dropdown> 
          
        </Nav>
      </Container>
    </Navbar> 
    <Outlet/>
    </>
  )
}

export default Header
