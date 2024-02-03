const React = require('react');
const Header = require('./Header')
function Layout({ title = 'Home Page', children,user }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <title>{title}</title>
        </head>
        <Header user={user}/>
        {user && <div>{`User is: ${user?.email}`}</div>}
        <body>{children}</body>
        </html>
    );
}

module.exports = Layout;
