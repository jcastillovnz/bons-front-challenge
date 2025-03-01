import React from 'react';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './login.css';
import { useForm } from "react-hook-form";
import { loginGame } from './../../store/actions';


const Login = (): JSX.Element => {
    const dispatch = useDispatch()
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data: { name: string }) => {
        const { name } = data;
        dispatch(loginGame(name,
        () => { history.push({ pathname: '/Board' }); }))

    }
    return (
        <div className="container">
            <p style={{ textAlign: "center" }}>
                <h1 style={{ color: '#ffff', fontSize: 25 }}>Welcome to! Bons Game!</h1>
                <p style={{ color: '#ffff', fontSize: 20 }} >What's your name ?</p>
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ flexDirection: 'column', marginBottom: 50 }}>
                    <input name="name" className="css-input"
                        placeholder="NAME" ref={register({ required: true })} />

                    <p style={{ textAlign: 'center', margin: 8, fontSize: 13, color: 'red' }}>
                        {errors.name && <span>This field is required</span>}
                    </p>
                    <hr />
                    <button className='buttonLg' >LET'S PLAY!</button>
                </div>
            </form>
        </div>);
}

export default Login;