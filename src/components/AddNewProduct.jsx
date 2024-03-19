import { useAddNewProductMutation } from "../features/api/productApiSlice";

const AddNewProduct = () => {
  // const res = useAddNewProductMutation()
  // console.log(res)

  const [addNewProduct, { data, isError, isLoading }] =
    useAddNewProductMutation();
  console.log(addNewProduct);

  if (isError) {
    return <h1>Error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const handleProduct = async () => {
    try {
      const newProductData = {
        id: 1,
        title: "Amazing T-shirt",
        description: "This is the best T-Shirt in the market",
      };
      await addNewProduct(newProductData);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
      <button onClick={handleProduct} disabled={isLoading}>
        Add New Product
      </button>
    </>
  );
};

export default AddNewProduct;
