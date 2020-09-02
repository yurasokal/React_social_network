import React from 'react';
import LoginForm from './LoginForm';
import { reduxForm } from 'redux-form';


const LoginReduxForm = reduxForm ({form: 'login'})(LoginForm)

const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginReduxForm />
    </div>
}

export default Login;