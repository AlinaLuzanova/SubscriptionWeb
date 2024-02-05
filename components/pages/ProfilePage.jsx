const React = require('react')
const Layout = require('../Layout')

module.exports = function ProfilePage({
  user,
  channels,
  cost,
  usersSubscribtions,
}) {
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
        <div className="mySubscriptions">
          <h2>Subscribtions by {user.email}</h2>
          {usersSubscribtions ? (
            <ul>
              {usersSubscribtions.map((sub) => (
                <li key={sub.id}>
                  <h2>
                    <a href={`/channels/${sub.id}`} key={sub.id}>
                      {sub.title}
                    </a>
                  </h2>
                  <a
                    href={`/channels/edit/${sub.id}`}
                    className='editLink'
                  >
                    Edit
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <h3>You didn't create any subscription</h3>
          )}
        </div>
        <a href={`/subscribtions/new/${user.id}`}>Create new subscribtion</a>
      </div>
    </Layout>
  )
}
