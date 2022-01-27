import React from 'react';
import { useNavigate } from 'react-router-dom';
import registerSchema from './register.schema';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import './Register.scss'
import { register } from '../services/user.service';



export default function Register() {
    const navigate = useNavigate();

    async function submit(values) {
        try {
            await register(values);
            navigate('/login')
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='main'>
            <h2 className='title-register'>Registration</h2>
            <Formik
                initialValues={{ name: '', username: '', email: '', password: '' }}
                validationSchema={registerSchema}
                onSubmit={submit}>
                <Form>
                    <div>
                        <Field className="input" name="name" placeholder="Name..." />
                        <ErrorMessage component="div" className="error" name="name" />
                    </div>
                    <div>
                        <Field className="input" name="username" placeholder="Username..." />
                        <ErrorMessage component="div" className="error" name="username" />
                    </div>
                    <div>
                        <Field className="input" type="email" name="email" placeholder="email@email.com..." />
                        <ErrorMessage component="div" className="error" name="email" />
                    </div>
                    <div>
                        <Field className="input" type="password" name="password" placeholder="Password..." />
                        <ErrorMessage component="div" className="error" name="password" />
                    </div>
                    <div>
                        <button className='submit-register' type="submit">Register</button>
                    </div>
                    <div className='login-link'>Already have an account?<a href='http://localhost:3000/login'>Login here</a></div>
                </Form>
            </Formik>
        </div>
    )
}
