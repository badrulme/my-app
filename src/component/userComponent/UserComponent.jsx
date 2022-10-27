import React, { useState } from 'react'
import AddUserComponent from './AddUserComponent'
import UserListComponent from './UserListComponent'

export default function UserComponent() {
    const [users, setUsers] = useState(
        [
            {
                id: 1,
                name: "Test 1234",
                age: 10

            },
            {
                id: 2,
                name: "Test 1235",
                age: 14

            },
            {
                id: 3,
                name: "Test 1236",
                age: 15

            },
        ]
    );

    const addUserHandler = (name, age) => {
        setUsers((users) => {
            return [...users, { id: Math.random().toString(), name: name, age: age }]
        })
    }
    return (
        <>
            <AddUserComponent onAddUser={addUserHandler} />
            <UserListComponent users={users} />
        </>
    )
}
