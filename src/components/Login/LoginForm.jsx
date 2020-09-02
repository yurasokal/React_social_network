import React from 'react';
import { Field } from 'redux-form';

const LoginForm = (props) => {
    return (
<form>
<div>
    <Field placeholder={"Login"} component={"input"} name={"login"} />
</div>
<div>
    <Field placeholder={"Password"} component={"input"} name={"password"} />
</div>
<div>
    <Field component={"input"} type={"checkbox"} name={"remember me"} /> remember me
</div>
<div>
    <button>Login</button>
</div>
</form>
)}


export default LoginForm;