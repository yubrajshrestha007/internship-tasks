import React from 'react'
interface User {
    id: number
    name: string
    email: string
}

const UserPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const user:User[] = await res.json();
  return (
    <div>
        <h1>Users</h1>
        <p>
            {new Date().toLocaleTimeString()}
        </p>
        <ul>
            {user.map((user) => (
                <li key={user.id}>{user.name} - {user.email}</li>
            ))}
        </ul>
    </div>

  )
}

export default UserPage
