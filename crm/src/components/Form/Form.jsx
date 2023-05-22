import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FormInput} from './FormInput'

let data = {}

const Form = () => {
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      const id = localStorage.getItem("id")

      if (id) {
        try {
          const response = await fetch('http://localhost:5000/autorization', {
            mode: 'cors',
            method: "POST",
            body: JSON.stringify({ userId: id }),
            headers: {
              "Content-Type": "application/json"
            }
          });
          const data = await response.json();
          console.log({ data });
          if (data.user._id) {
            navigate("/dashboard")
          }
        }
        catch (e) {
          console.log(e)
        }
      }
    }
    fetchData()
  }, [])
  const [sign, setSign] = useState(false)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const registr = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const login = (e) => {
    e.preventDefault()
    makeAPICall()
  }


  const signIn = (e) => {
    e.preventDefault()
    makeAPICall()
  }


  const makeAPICall = async (type) => {


    if (!sign) {
      try {
        const response = await fetch('http://localhost:5000/registr', {
          mode: 'cors',
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        console.log({ data })
      }
      catch (e) {
        console.log(e)
      }
    } else {
      try {
        const response = await fetch('http://localhost:5000/login', {
          mode: 'cors',
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        if (data.msg === "ok") {
          localStorage.setItem("id", data.id)
        }
      }
      catch (e) {
        console.log(e)
      }
    }
  }


  return (
    <div className='form'>
      <div className='form__top'>
        <img src={require("../../images/back/logo.png")} />
        <p>Welcome to Win Store.com</p>
      </div>
      <div className='form__inputs'>
        <div className='form_btns'>
          <button onClick={() => {
            setSign((prev) => prev = true)
            data = {}
          }}>Sign In</button>
          <button onClick={() => {
            setSign((prev) => prev = false)
            data = {}
          }}>Registr</button>
        </div>
        {
          sign ?
            <div className='form__input'>
              <FormInput type={"email"} placeholder={"Email Address"} name={"email"} change={(e) => registr(e)} />
              <FormInput type={"text"} placeholder={"Password"} name={"password"} hideShow={true} change={(e) => registr(e)} />
              <div className='check'>
                <input type='checkbox' /> <span>Remember password</span>
                <a href='#'>Forget password</a>
              </div>
              <button className='login' onClick={login}>Login</button>
              <span>or connect with</span>
              <div className='social'>
                <a href='#' value="facebook"></a>
                <a href='#' value="instagram"></a>
                <a href='#' value="pinterest"></a>
                <a href='#' value="linkedin"></a>
              </div>
            </div>
            : <div className='form__input'>
              <span>Use your credentials to login  into account</span>
              <FormInput type={"text"} placeholder={"Full Name"} name={"fullName"} change={(e) => registr(e)} />
              <FormInput type={"email"} placeholder={"Email"} name={"email"} change={(e) => registr(e)} />
              <FormInput type={"text"} typePassword={"password"} placeholder={"Password"} hideShow={true} name={"password"} change={(e) => registr(e)} />
              <FormInput type={"text"} typePassword={"password"} placeholder={"Confirm Password"} name={"confirm"} hideShow={true} change={(e) => registr(e)} />
              <div className='check'>
                <input type='checkbox' /> <span>Remember password</span>
                <a href='#'>Forget password</a>
              </div>
              <button className='login' onClick={signIn}>Register</button>

            </div>
        }
      </div>
    </div>
  )
}

export default Form