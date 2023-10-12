"use client"
import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';

export default function Home() {
  const [login, setLogin] = useState(true)

  const validationSchema = Yup.object({
    username: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
    repassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required'),
  });


  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  return (
    login === true ? <form className='loginForm' data-testid="loginForm">
    <div className="logoOnLoginForm"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="#633CFF" fill-rule="evenodd" d="M4.619 27.38c1.954 1.953 5.095 1.953 11.38 1.953 6.286 0 9.429 0 11.38-1.953 1.954-1.95 1.954-5.095 1.954-11.38 0-6.286 0-9.428-1.953-11.381C25.43 2.667 22.285 2.667 16 2.667c-6.286 0-9.428 0-11.381 1.952-1.952 1.954-1.952 5.095-1.952 11.38 0 6.286 0 9.429 1.952 11.38Zm8.047-15.713A4.333 4.333 0 1 0 17 16a1 1 0 0 1 2 0 6.333 6.333 0 1 1-6.334-6.334 1 1 0 1 1 0 2Zm11 4.333a4.333 4.333 0 0 1-4.333 4.333 1 1 0 1 0 0 2A6.333 6.333 0 1 0 13 16a1 1 0 1 0 2 0 4.334 4.334 0 0 1 8.666 0Z" clip-rule="evenodd"/></svg>
      <h2>devlinks</h2>
    </div>
    <div className="loginFormText">
      <h1>Login</h1>
      <p>Add your details below to get back into the app</p>
    </div>
    <div className="inputsLoginForm">
      <div className="firstInputLoginForm">
        <label htmlFor="emailAddress">Email address</label>
        <input type="text" placeholder='e.g. alex@email.com' value={formData.username} onChange={(e) => {
          setFormData({ ...formData, username: e.target.value })
  }}/>
      </div>
      <div className="secondInputLoginForm">
        <label htmlFor="Password">Password</label>
        <input type="text" placeholder='Enter your password' value={formData.password} onChange={(e) => {
          setFormData({ ...formData, password: e.target.value })
        }}/>
      </div>
      <div className='loginButton' >Login</div>
      <p className='createAnAccountNotification'>
      Don’t have an account? <span onClick={() => {
        setLogin(false)
      }} data-testid="span-1">Create account</span>
      </p>
    </div>
  </form> : <Formik
              initialValues={{
                username: '',
                password: '',
                repassword: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                // Handle form submission here
                console.log(values)
              }}
            >
    <Form data-testid="createAccountForm" className='createAccountForm'>
      <div className="logoOnLoginForm">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="#633CFF" fill-rule="evenodd" d="M4.619 27.38c1.954 1.953 5.095 1.953 11.38 1.953 6.286 0 9.429 0 11.38-1.953 1.954-1.95 1.954-5.095 1.954-11.38 0-6.286 0-9.428-1.953-11.381C25.43 2.667 22.285 2.667 16 2.667c-6.286 0-9.428 0-11.381 1.952-1.952 1.954-1.952 5.095-1.952 11.38 0 6.286 0 9.429 1.952 11.38Zm8.047-15.713A4.333 4.333 0 1 0 17 16a1 1 0 0 1 2 0 6.333 6.333 0 1 1-6.334-6.334 1 1 0 1 1 0 2Zm11 4.333a4.333 4.333 0 0 1-4.333 4.333 1 1 0 1 0 0 2A6.333 6.333 0 1 0 13 16a1 1 0 1 0 2 0 4.334 4.334 0 0 1 8.666 0Z" clip-rule="evenodd"/></svg>
        <h2>devlinks</h2>
      </div>
      <div className="createAccountText">
        <h1>Create account</h1>
        <p>Let’s get you started sharing your links!</p>
      </div>
      <div className="createAccountForm">
      <div className="firstCreateAccountForm">
                <label htmlFor="emailAddress">Email address</label>
                <Field type="text" name="username" placeholder='e.g. alex@email.com'/>
                <ErrorMessage name="username" component="div" className="error" />
      </div>
      <div className="secondCreateAccountForm">
                <label htmlFor="Password">Password</label>
                <Field type="password" name="password" placeholder='At least 8 characters' />
                <ErrorMessage name="password" component="div" className="error" />
      </div>
      <div className="thirdCreateAccountForm">
                <label htmlFor="repassword">Confirm password</label>
                <Field type="password" name="repassword" placeholder='At least 8 characters' />
                <ErrorMessage name="repassword" component="div" className="error" />
        </div>
        <button className='createAccountButton' type='submit'>Create new account</button>
        <p>Already have an account? <span onClick={() => {
          setLogin(true)
        }} data-testid="span-2">Login</span></p>
      </div>
    </Form>
  </Formik>
  )
}
