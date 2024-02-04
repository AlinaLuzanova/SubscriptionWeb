const React = require('react')
const Layout = require('../Layout')
module.exports = function LoginPage({ title }) {
  return (
    <Layout title="Login page">
      <h2>Login</h2>
      <form method="POST" action="/api/login" name="login-form">
        <label>
          Enter email:
          <input type="email" name="email" />
        </label>
        <label>
          Enter password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </Layout>
  )
}
