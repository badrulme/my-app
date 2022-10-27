import React from 'react'

export default function UserListComponent(props) {
    return (
        <>
            <br />
            <div className="row justify-content-md-center">
                <div className='col-md-6'>
                    <div className="card">
                        <ul className="list-group list-group-flush">
                            {props.users.map(data => (
                                <li className="list-group-item">{data.id}, {data.name}, {data.age}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
