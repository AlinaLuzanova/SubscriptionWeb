const React = require('react')
const Layout = require('../Layout')

module.exports = function ProfilePage({ user, channels, cost }) {
  return (
    <Layout title="Profile" user={user}>
      <ul>
        {channels.map((channel) => (
          <li key={channel.id}>
            {channel.title}
            <button type="submit" data-id={channel.id}>
              Unsubscribe
            </button>
          </li>
        ))}
      </ul>
      <h5>General cost: {cost}</h5>
    </Layout>
  )
}
