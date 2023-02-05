// import Home from "./Components/Home";
// import Header from "./Components/Header";
// import { Route, Routes } from "react-router-dom";
// import Cart from "./Components/Cart";
// import Products from "./Components/Products";
import Users from "./Components/Users";
import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
function App() {
  const queryClient = new QueryClient()
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Header/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/product" element={<Products/>}/>
        </Route>
      </Routes> */}
       <QueryClientProvider client={queryClient}>
       <Users />
     </QueryClientProvider>
    </>
  );
}

export default App;
