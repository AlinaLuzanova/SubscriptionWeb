const React = require('react')
const Layout = require('../Layout')
module.exports = function RegisterPage({ title }) {
  return (
    <Layout title={title}>
      <h2>Sign Up</h2>
      <form method="POST" action="/api/register" name="register-form">
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
    </Layout>
  )
}
