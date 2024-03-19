import { useUpdateProductMutation } from "../features/api/productApiSlice"


const UpdateProduct = ({ productId }) => {
    const [updateProduct, {data, isError, isLoading}] = useUpdateProductMutation()
   

    if(isError) {
        <h1>error</h1>
    }

    if(isLoading) {
        <h1>Loading...</h1>
    }


    const handleUpdateProduct = async () => {
        try {
            const updatedProductData = {
                title: "Title updated 🤝",
            };

            await updateProduct({
                id: productId,
                updatedProduct: updatedProductData,
            });
        } catch (error) {
            console.log("Error updating product", error)
        }
    }


  return (
    <div>
        <h1>{data?.title}</h1>
        <button onClick={handleUpdateProduct} disabled={isLoading}>Update Product</button>
    </div>
  )
}

export default UpdateProduct