import React from 'react';
//Modify values in the state
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

function Login() {
    const dispatch = useDispatch();

    return (
        <div><button onClick={() => {
            dispatch(login({ name: "andrew", age: 30, email: "andrew@hotmail.com" }));
        }}>
            Login </button>

            <button onClick={() => {
                dispatch(logout());
            }}>Logout </button>
        </div>
    );
}

export default Login;