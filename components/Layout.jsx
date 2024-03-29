const React = require("react");
const Header = require("./Header");
function Layout({ title = "Home Page", children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <script defer src="/js/auth.js"></script>
        <script defer src="/js/subscribe.js"></script>
        <script defer src="/js/createSubscription.js"></script>
        <script defer src="/js/editSubscription.js"></script>
        <link rel="stylesheet" href="/css/style.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        />
        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16"
          href="/favicon.ico"
        />
      </head>
      <body>
        <Header user={user} />
        {user && (
          <div className="headerEmail">{`You logged in by: ${user.email}`}</div>
        )}
        {children}
      </body>
    </html>
  );
}

module.exports = Layout;
