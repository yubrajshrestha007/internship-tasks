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
        <table className='border-separate outline-dashed'>
            <thead>
                <tr className='outline-current'>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {user.map((user) => (
                <tr  key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>

  )
}

export default UserPage
