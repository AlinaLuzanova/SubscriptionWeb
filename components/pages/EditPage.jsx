const React = require('react')
const Layout = require('../Layout')

module.exports = function EditPage({ title, user, channel }) {
  return (
    <Layout title={title} user={user}>
      <div className="editPage">
        <form
          data-url={`/api/channels/edit/${channel.id}`}
          name="editPageForm"
          action={`/api/channels/edit/${channel.id}`}
        >
          <label>
            Channel title
            <input type="text" name="title" defaultValue={channel.title} />
          </label>
          <label>
            Monthly subscription cost
            <input type="text" name="cost" defaultValue={channel.cost} />$
          </label>
          <label>
            Link for image
            <input type="text" name="image" defaultValue={channel.img} />
          </label>
          <button type="submit">Edit</button>
        </form>
      </div>
    </Layout>
  )
}
