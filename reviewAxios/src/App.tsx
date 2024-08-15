import { useEffect, useRef, useState } from "react"
import ProductList from "./components/ProductList";
import FetchingAxios from "./components/FetchingAxios";

const App = () => {

  const [category, setCategory] = useState('')
  /////////UseEffect/////////////////////////
  // useEffect(() => {});
  //To execute a piece of code AFTER  a component is rendered

  useEffect(() => {
    
  //Code in here will execute when the component is first loaded
  if(ref.current) ref.current.focus();
    
  },[])
  useEffect(() => {
    
  //Code in here will execute when the component is first loaded
  document.title = "My Cool Review"
    
  },[])
  ///with this dependency array any time there is a re-render it will fire the useEffect again, example passing in Props, or State

///////useRef////////////////////////////////////
//we use uesRef to manipulate the DOM
const ref = useRef<HTMLInputElement>(null)



  return (
    <>
      <h1 className="text-center"> Review Axios and React UseEffect</h1>
      <select className="form-select" onChange={(e) => setCategory(e.target.value)}>
        <option value='Car'>Car</option>
        <option value="Pool">Pool</option>

    </select>
      <input ref={ref} type="text" />
      <ProductList category={category}/>
      <FetchingAxios/>
    </>
  )
}

export default App