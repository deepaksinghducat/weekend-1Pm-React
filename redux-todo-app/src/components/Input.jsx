import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';


function Input() {

    const dispatch = useDispatch();

    const [input, setInput] = useState('');
    const [err, setErr] = useState(false);

    const addHandler = (event) => {
        event.preventDefault();

        if (input.length > 0) {
            dispatch({type: 'add-todo', payload: input})
            

            setInput('');
        } else {
            setErr(true);
        }
    }

    return (
        <form className="row g-3" onSubmit={addHandler}>
            <div className="col-10">
                <input
                    type="text"
                    className="form-control"
                    id="todo"
                    value={input} onChange={(e) => {
                        setInput(e.target.value)
                        setErr(false)
                    }}
                />
                {err && <p className='text-danger'>Please Enter valid Todo</p>}
            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-primary">Add Todo</button>
            </div>
        </form>
    )
}

export default Input