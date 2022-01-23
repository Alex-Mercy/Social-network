import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../validators/validator";
import {login} from "../../redux/auth-Reducer";
import { Navigate } from "react-router-dom";
import styles from "./Login.module.css";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <Field placeholder="Email" name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder="Password" name="password" type="password" 
                component={Input} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name="rememberMe" type="checkbox" />Remember me
            </div>
            { error && <div className={styles.formSummaryError} >
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStatetoProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect (mapStatetoProps, {login} ) (Login);
