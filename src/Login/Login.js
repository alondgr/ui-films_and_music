import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import loginSchema from './login.schema';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import './Login.scss';
import { login, me } from '../services/user.service';
import { UserContext } from '../App';


export default function Login() {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);



    async function submit(values) {
        try {
            const { token } = await login(values);
            localStorage.setItem('token', token);
            const loggedUser = await me();
            setUser(loggedUser);
            navigate('/')
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className='main'>
            <h2 className='title-login'>Login</h2>
            <Formik
                initialValues={{ username: '', password: '' }}
                validationSchema={loginSchema}
                onSubmit={submit}>
                <Form>
                    <div>
                        <Field className="input" name="username" placeholder="Username..." />
                        <ErrorMessage component="div" className="error" name="username" />
                    </div>
                    <div>
                        <Field className="input" type="password" name="password" placeholder="Password..." />
                        <ErrorMessage component="div" className="error" name="password" />
                    </div>
                    <div>
                        <button className='submit-login' type="submit">Login</button>
                    </div>
                    <div className='register-link'>Don't have an account?<a href='http://localhost:3000/register'>Register here</a></div>
                </Form>
            </Formik>
        </div>
    )
}
