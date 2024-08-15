import axios from "axios"
// Import the Axios library, which is used to make HTTP requests from the browser.

import { BASE_URL } from "../constant"
// Import a constant BASE_URL from another file. This is likely the base URL for your API.

import { useEffect, useState } from "react"
// Import React hooks: useEffect to handle side effects in function components, and useState to manage state in the component.

interface User {
    id: number
    name: string
}
// Define a TypeScript interface for the User object, specifying that each user has an `id` (number) and a `name` (string).

const FetchingAxios = () => {

    const [users, setUsers] = useState<User[]>([])
    // Initialize state `users` as an empty array of User objects. This state will hold the list of users fetched from the API.

    ///create a function to help us fetch our data////
    const fetchData = () => {
        // Define a function `fetchData` that will handle fetching data from the API.

        axios.get(BASE_URL + 'usersx')
        // Make a GET request to the API endpoint (constructed by appending 'usersx' to BASE_URL) using Axios.

        .then(response=> setUsers(response.data))
        // If the request is successful, the `then` block executes. The response data (the list of users) is used to update the `users` state.

        .catch(error => {
            console.log(error);
            // If there’s an error during the request, the `catch` block executes and logs the error to the console.
        })
    }

    useEffect(() => {
        fetchData();
        // The useEffect hook runs after the component has rendered. It calls `fetchData` to fetch the users when the component first mounts.

    }, [])
    // The empty dependency array `[]` ensures that `fetchData` is only called once when the component mounts, not on subsequent renders.

    return (
        <>
        <h1 className="text-center">Axios Review</h1>
        {/* Render an <h1> element with the text 'Axios Review' centered on the page. */}

        <ul className="list-group" data-bs-theme="dark">
        {/* Create an unordered list (<ul>) with Bootstrap styling for dark themes. */}

        {users.map((user) => <li className="list-group-item" key={user.id}>{user.name}</li>)}
        {/* Loop over the `users` array and create a list item (<li>) for each user. Each item is assigned a unique `key` based on the user’s `id` and displays the user’s name. */}

        </ul>
        </>
    )
}

export default FetchingAxios
// Export the FetchingAxios component as the default export of this module.
