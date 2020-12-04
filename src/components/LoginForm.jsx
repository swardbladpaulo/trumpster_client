import React from 'react'


const LoginForm = () => {
  return (
    <div>
      <form
            data-cy="login-form"
          >
            <input
              type="email"
              name="email"
              data-cy="email"
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              data-cy="password"
              placeholder="Password"
            />
            <button type="submit" value="Register" data-cy="login-btn">
              Submit
            </button>
          </form>
    </div>
  )
}

export default LoginForm
