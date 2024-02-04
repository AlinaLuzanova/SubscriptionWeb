const React = require('react')
const Layout = require('../Layout')

module.exports = function HomePage({ channels, title, user }) {
  return (
    <Layout title="Home page" user={user}>
      <h2>Home Page</h2>
      <ul>
        {channels.map((channel) => (
          <li key={channel.id}>
            {channel.title}

            {/* Условный рендеринг кнопки Subscribe */}
            {user && (
              <button type="submit" data-id={user.id}>
                Subscribe
              </button>
            )}
          </li>
        ))}
      </ul>
    </Layout>
  )
}
