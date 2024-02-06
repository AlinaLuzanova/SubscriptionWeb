const React = require("react");
module.exports = function Header({ user }) {
  return (
    <div className="header">
      <img src="/colorLogo.png" id="logo" alt="logo" />
      <div>
        <a href="/">Home</a>
      </div>

      {user ? (
        <>
          <div>
            <a className="logoutLink" href="api/auth/logout">
              Log out
            </a>
          </div>
          <div>
            <a href="/profile">Profile</a>
          </div>
        </>
      ) : (
        <>
          <div>
            <a href="/login">Login</a>
          </div>

          <div>
            <a href="/register">Sign Up</a>
          </div>
        </>
      )}
    </div>
  );
};
