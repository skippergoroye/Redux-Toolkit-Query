import {useGetProductByIdQuery } from "../features/api/productApiSlice"

const SpecificProducts = () => {
  const { data, isError, isLoading} = useGetProductByIdQuery(6)
  console.log(data)


  return (
    <>
      <h1>{data && data?.brand}</h1>
      <h2>{data && data?.category}</h2>
      <h3>{data && data?.description}</h3>
    </>
  )
}

export default SpecificProducts