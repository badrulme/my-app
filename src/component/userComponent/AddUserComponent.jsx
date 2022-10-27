import React, { useState } from 'react'

export default function AddUserComponent(props) {

    const [inputName, setInputName] = useState();
    const [inputAge, setInputAge] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(inputName, inputAge);
        props.onAddUser(inputName, inputAge);
        setInputName('');
        setInputAge('');
    }

    const nameInputHandler = (event) => {
        setInputName(event.target.value);
    }
    const ageInputHandler = (event) => {
        setInputAge(event.target.value);
    }
    return (
        <>
            <br />
            <div className="row justify-content-md-center">
                <div className='col-md-6'>
                    <div className="card">
                        <form onSubmit={submitHandler} className="row g-3">
                            <div className="col-auto">
                                <label for="name" className="visually-hidden">Name</label>
                                <input value={inputName} onChange={nameInputHandler} type="text" className="form-control" id="name" placeholder="ex: Badrul" />
                            </div>
                            <div className="col-auto">
                                <label for="age" className="visually-hidden">Age</label>
                                <input value={inputAge} onChange={ageInputHandler} type="numberF" className="form-control" id="age" placeholder="ex: 27" />
                            </div>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-secondary">Create User</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
