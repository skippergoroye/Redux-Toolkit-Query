import React from "react";
import { useGetAllProductQuery } from "../features/api/productApiSlice";

const AllProducts = () => {
  const res = useGetAllProductQuery()
  console.log(res)


  const { data, isError, isLoading } = useGetAllProductQuery();

  if (isError) {
    return <h1>OOhNoo we got an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }


  
  return (
    <div>
      {data?.products.map((product) => (
        <div>
          <h1 key={product.id}>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
