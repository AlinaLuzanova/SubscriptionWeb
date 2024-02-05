const React = require('react')
const Layout = require('../Layout')
module.exports = function LoginPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="authPage">
        <h1>Login</h1>
        <form
          method="POST"
          action="/api/login"
          name="login-form"
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
          <button type="submit">Login</button>
        </form>
      </div>
    </Layout>
  )
}
