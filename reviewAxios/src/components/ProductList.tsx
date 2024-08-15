import { useEffect, useState } from "react"

interface Props {
    category: string;
}
const ProductList = ({category}:Props) => {


    ///useState of products.  /// product is our variable holding an empty array []// setProduct is updater function that sets our product.
    //setProduct(['car','pool']); then product will hold an array of products.
    const [product, setProduct] = useState<string[]>([]);
    //useState to hold our category
    


    useEffect(() => {
      
    console.log('fetching data in',category);
    setProduct(['Car','Pool']);
      
    },[category])
    

  return (
  <>
    <h1 className="text-center">Product List</h1>
    
  </>
  )
}

export default ProductList