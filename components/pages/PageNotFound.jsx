const React = require("react");
const Layout = require("../Layout");

function PageNotFound() {
  return (
    <Layout>
      <div className="notFoundWrap">
        <img src="/images/PageNotFound.gif" alt="not found" />
        <span className="notFoundText">404 Page Not Found</span>
        <a href="/">Return to Main Page</a>
      </div>
    </Layout>
  );
}

module.exports = PageNotFound;
