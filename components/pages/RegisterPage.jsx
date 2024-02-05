const React = require('react')
const Layout = require('../Layout')
module.exports = function RegisterPage({ title }) {
  return (
    <Layout title={title}>
      <div className="authPage">
        <h1>Sign Up</h1>
        <form
          method="POST"
          action="/api/register"
          name="register-form"
          className="authForm"
        >
          <label>
            Enter email:
            <input type="email" name="email" />
          </label>
          <label>
            Enter password:
            <input type="password" name="password" />
          </label>
          <label>
            Confirm password:
            <input type="password" name="password2" />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </Layout>
  )
}
