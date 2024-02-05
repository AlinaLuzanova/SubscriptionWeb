const React = require('react')
const Layout = require('../Layout')

module.exports = function NewChannel({ title, user }) {
  return (
    <Layout title="Create new channel" user={user}>
      <div className="new-channel">
        <h2>Create new channel</h2>
        <form method="POST" name="newSubForm" action={`/api/subscriptions/new`}>
          <label>
            Channel title
            <input type="text" name="title" />
          </label>
          <label>
            Monthly subscription cost
            <input type="text" name="cost" />$
          </label>
          <label>
            Link for image
            <input type="text" name="image" />
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
    </Layout>
  )
}
