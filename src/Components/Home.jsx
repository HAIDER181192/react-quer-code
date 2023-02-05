import React, { useContext } from 'react'
import { AppContext } from '../Context/Context'
import Products from './Products'
import { Audio } from  'react-loader-spinner'

function Home() {
    let {state, loading} = useContext(AppContext)
    let {products} = state
    
  return (
    <>
    <div className="container">
    <div className="container-fluid">
        <div className="row mt-2 d-flex">
          {loading ? (
            <Audio
            height = "100"
            width = "100"
            radius = "9"
            color = 'green'
            ariaLabel = 'three-dots-loading'     
            wrapperStyle
            wrapperClass
          />
          ) : (
            products.map((prod) => {
              return (
                <Products prod={prod} key = {prod.id}/>
               
              );
            })
          )}
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Home
