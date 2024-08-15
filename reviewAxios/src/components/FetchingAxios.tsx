import axios from "axios"
import { BASE_URL } from "../constant"
import { useEffect, useState } from "react"

interface User {
    id: number
    name: string
}


const FetchingAxios = () => {

    const [users, setUsers] = useState<User[]>([])


    ///create a function to help us fetch our data////
    const fetchData = () => {
        //get axios returns a promise
        axios.get(BASE_URL + 'usersx')
        .then(response=> setUsers(response.data))
        .catch(error => {
            console.log(error);
            
        })
        
        
    }

    useEffect(() => {
      
        fetchData();
    
      
    }, [])
    


  return (
    <>
    <h1 className="text-center">Axios Review</h1>
    <ul className="list-group" data-bs-theme="dark">

    {users.map((user) => <li className="list-group-item"  key={user.id}>{user.name}</li>)}

    </ul>
    </>
  )
}

export default FetchingAxios