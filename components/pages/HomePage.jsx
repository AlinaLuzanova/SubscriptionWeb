const React = require('react')
const Layout = require('../Layout')

module.exports = function HomePage({ channels, title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="homePage">
        <h1>Search page</h1>

        {!user && (
          <div className="h3Container">
            <h3>
              SUBSCRIBE WEB is a calculator for you online subscriptions. Here
              you can find channels, podcasts, services that you can add to your
              list or create a new one.To use all functionality, please sign in
              or sign up.
            </h3>
          </div>
        )}
        {user && (
          <div className="h3Container">
            <h3>
              Choose one to subscribe to. Or you can always create a new in your
              profile.
            </h3>
          </div>
        )}

        <ul>
          {channels.map((channel) => (
            <h2>
              <li key={channel.id}>
                <h2>
                  <a href={`/channels/${channel.id}`} key={channel.id}>
                    {channel.title}
                  </a>
                </h2>
              </li>
            </h2>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
