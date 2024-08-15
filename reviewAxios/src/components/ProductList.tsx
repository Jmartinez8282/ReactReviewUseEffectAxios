import { useEffect, useState } from "react"
// Import React hooks: useEffect for handling side effects in function components, and useState for managing state.

interface Props {
    category: string;
}
// Define a TypeScript interface `Props` to specify that the `ProductList` component expects a prop called `category` of type `string`.

const ProductList = ({category}: Props) => {
    // Destructure the `category` prop from the `Props` interface and use it within the `ProductList` component.

    ///useState of products.  
    /// product is our variable holding an empty array []//
    /// setProduct is the updater function that sets our product.
    // Example: setProduct(['car', 'pool']); 
    // This would update `product` to hold the array ['car', 'pool'].
    const [product, setProduct] = useState<string[]>([]);
    // Initialize `product` as an empty array of strings. This state will hold the list of products.

    useEffect(() => {
        console.log('fetching data in', category);
        // Log a message to the console indicating the category being fetched.

        setProduct(['Car', 'Pool']);
        // Temporarily set the `product` state to an array containing 'Car' and 'Pool'.
        // This simulates fetching products related to the specified category.

    }, [category]);
    // The useEffect hook runs every time the `category` prop changes.
    // This ensures that the product list is updated whenever a new category is passed in.

    return (
    <>
        <h1 className="text-center">Product List</h1>
        {/* Render an <h1> element with the text 'Product List' centered on the page. */}

        {/* Additional code could be added here to display the `product` list if needed. */}
    </>
    )
}

export default ProductList
// Export the `ProductList` component as the default export of this module.
