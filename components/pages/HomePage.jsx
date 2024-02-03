const React = require('react');
const Layout = require('../Layout');

module.exports = function HomePage({title,user}){
    return(
        <Layout title = 'Home page' user={user}>
            <h2>Home Page</h2>
        </Layout>
    )
}
