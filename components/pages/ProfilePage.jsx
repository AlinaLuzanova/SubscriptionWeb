const React = require('react')
const Layout = require('../Layout')

module.exports = function ProfilePage({ user, channels, cost }) {
  return (
    <Layout title="Profile" user={user}>
      <div className="profilePage">
        <h1>All subscriptions</h1>
        <ul>
          {channels.map((channel) => (
            <li key={channel.id}>
              <h2>
                <a href={`/channels/${channel.id}`} key={channel.id}>
                  {channel.title}
                </a>
              </h2>
              <div className="unsubscribeBTNWrap">
                <button
                  className="unsubscribeBTN"
                  type="submit"
                  data-id={channel.id}
                  data-url={`/api/channel/${channel.id}`}
                >
                  Unsubscribe
                </button>
              </div>
            </li>
          ))}
        </ul>
        <h4>General cost: {cost}$</h4>
      </div>
    </Layout>
  )
}
