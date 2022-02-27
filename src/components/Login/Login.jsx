import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Input, InputMui } from "../common/FormsControls/FormsControls";
import { required } from "../validators/validator";
import { login } from "../../redux/auth-Reducer";
import { Navigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const validate = values => {
    const errors = {}
    const requiredFields = [ 'email', 'password' ]
    requiredFields.forEach(field => {
      if (!values[ field ]) {
        errors[ field ] = 'Required'
      }
    })
    if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    return errors
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

//   const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
//     return (
//         <form onSubmit={handleSubmit} >
//             <div>
//                 <Field placeholder="Email" name={"email"} component={Input} validate={[required]} />
//             </div>
//             <div>
//                 <Field placeholder="Password" name="password" type="password"
//                     component={Input} validate={[required]} />
//             </div>
//             <div>
//                 <Field component={Input} name="rememberMe" type="checkbox" />Remember me
//             </div>

//             {captchaUrl && <div>
//                 <img src={captchaUrl} />
//                 <Field placeholder="Symbols from image" name="captcha"
//                     component={Input} validate={[required]} />
//             </div>}

//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     )
// }

const LoginForm = ({ handleSubmit, captchaUrl }) => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
            <Field name="email" component={InputMui} label="Email Address" id="email" />
            <Field name="password" component={InputMui} label="Password" id="password" type="password"/>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            {captchaUrl && <div>
                <img src={captchaUrl} />
                <Field placeholder="Symbols from image" name="captcha"
                    component={Input} validate={[required]} />
            </div>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Log In
              </Button>
            </form>
          </div>
        </Container>
      );
}

const LoginReduxForm = reduxForm({ form: 'login', validate })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }
    return <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />

}

const mapStatetoProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStatetoProps, { login })(Login);
