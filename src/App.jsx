import AllProducts from "./components/AllProducts";
import SpecificProducts from "./components/SpecificProducts";
import AddNewProduct from "./components/AddNewProduct";
import UpdateProduct from "./components/UpdateProduct";
import DeleteProduct from "./components/DeleteProduct";



function App() {
  

  return (
   <>
    {/* <AllProducts /> */}
    {/* <SpecificProducts /> */}
    {/* <AddNewProduct /> */}
    {/* <UpdateProduct productId={2} /> */}
    <DeleteProduct productId={2} />
   </>
  )
}

export default App
