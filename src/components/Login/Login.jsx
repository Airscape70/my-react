import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { Input, createField } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators";
import { Navigate } from "react-router-dom";
import style from '../common/FormsControls/FormsControls.module.css'

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>

      {createField("email", "email", "email", Input, [required, maxLengthCreator(30)])}
      {createField("password", "password", "password", Input, [required, maxLengthCreator(30)])}
      {createField("rememberMe", "checkbox", null, Input, null)} remember me

      {error && <div className={style.formSummaryError}>
        {error}
      </div>
      }
      <div>
        <button>login</button>
      </div>
    </form>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});



const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);


const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Navigate to={"/profile"} />
  }

  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} />
  </div>
}


export default connect(mapStateToProps, { login })(Login);