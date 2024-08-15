// Import necessary hooks from the React library
import { useEffect, useRef, useState } from "react";

// Import custom components ProductList and FetchingAxios from their respective paths
import ProductList from "./components/ProductList";
import FetchingAxios from "./components/FetchingAxios";

// Define the main App component
const App = () => {

  // Declare a state variable 'category' with its setter 'setCategory'
  // useState initializes 'category' to an empty string
  const [category, setCategory] = useState('')

  ///////// UseEffect /////////////////////////
  // First useEffect hook: 
  // This hook runs when the component is first mounted (rendered) 
  useEffect(() => {
    
    // Check if the 'ref' reference is set (not null)
    // If so, focus the input element referenced by 'ref'
    if(ref.current) ref.current.focus();
    
  },[]); // Empty dependency array means this effect runs only once, after the initial render

  // Second useEffect hook:
  // This hook also runs when the component is first mounted
  useEffect(() => {
    
    // Change the document's title to "My Cool Review" 
    document.title = "My Cool Review";
    
  },[]); // Again, this effect runs only once after the initial render

  /////// useRef //////////////////////////////
  // Create a reference 'ref' using useRef to reference a DOM element
  // In this case, it's used to reference an input element 
  // The initial value is set to null, indicating that the reference is not yet linked to any DOM element
  const ref = useRef<HTMLInputElement>(null);

  // The return statement defines what will be rendered by the App component
  return (
    <>
      {/* Heading for the page */}
      <h1 className="text-center"> Review Axios and React UseEffect</h1>
      
      {/* Dropdown select element for choosing a category */}
      {/* onChange event handler updates the 'category' state with the selected value */}
      <select className="form-select" onChange={(e) => setCategory(e.target.value)}>
        <option value='Car'>Car</option>   {/* Option for 'Car' */}
        <option value="Pool">Pool</option> {/* Option for 'Pool' */}
      </select>

      {/* Input element with a reference attached to 'ref' */}
      {/* This allows us to manipulate this input element directly, e.g., by focusing on it */}
      <input ref={ref} type="text" />

      {/* Render the ProductList component, passing the 'category' state as a prop */}
      <ProductList category={category}/>

      {/* Render the FetchingAxios component */}
      <FetchingAxios/>
    </>
  )
}

// Export the App component as the default export
export default App;
