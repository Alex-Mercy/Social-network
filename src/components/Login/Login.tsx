import React from "react";
import { connect } from "react-redux";
import { Field,  InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../validators/validator";
import { login } from "../../redux/auth-Reducer";
import { Navigate } from "react-router-dom";
import styles from "../common/FormsControls/FormsControls.module.css";
import { StateType } from "../../redux/redux-store";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <Field placeholder="Email" name={"email"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder="Password" name="password" type="password"
                    component={Input} validate={[required]} />
            </div>
            <div>
                <Field component={Input} name="rememberMe" type="checkbox" />Remember me
            </div>

            {captchaUrl && <div>
                <img src={captchaUrl} />
                <Field placeholder="Symbols from image" name="captcha"
                    component={Input} validate={[required]} />
            </div>}
            {error && <div className={styles.formSummaryError} >
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm)

type MyStatePropsType = {
    captchaUrl: string | null
    isAuth: boolean
}

type MyDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}

type LoginFormValuesType = {
    email: string
    password: string
    remeberMe: boolean
    captcha: string
}

const Login: React.FC<MyStatePropsType & MyDispatchPropsType> = (props) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }   

    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
}

const mapStatetoProps = (state: StateType): MyStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStatetoProps, { login })(Login);
