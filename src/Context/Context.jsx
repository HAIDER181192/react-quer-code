import { createContext, useContext, useEffect, useReducer, useState } from "react";

export let AppContext = createContext()


function reducer(state,action){
    switch (action.type) {
        case 'Add_Product':
            return {
                ...state, 
                products:action.payload
            }
            case 'Add to Cart':
            return {
                ...state,
                cart: [...state.cart, { ...action.payload,qty:1}]
            }
        case 'Remove from Cart':
            
            return {
              ...state,
              cart: [...state.cart.filter((item)=>item.id!== action.payload.id)]
            };
    
        default:
            return state;
    }
}


export let AppProvider = ({children}) =>{
    let[loading, setLoading] = useState(true)
    let[state, dispatch]= useReducer(reducer,
        {
            products:[],
            cart:[]
        })

    const fetchDataApi = async()=>{
        try {
            let response = await fetch('https://api.escuelajs.co/api/v1/products')
            let data = await response.json()
          

            dispatch(
                {type:'Add_Product',
                payload:data
            }
            )
        setLoading(false)
        } catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchDataApi()
    },[])

   return <AppContext.Provider value={{state, dispatch, loading}}>{children}</AppContext.Provider>


}
export const useGllobaldata=()=>{
    return useContext(AppContext)
}