const React = require("react");
const Layout = require("../Layout");

module.exports = function ProfilePage({
  user,
  channels,
  cost,
  usersSubscriptions,
}) {
  return (
    <Layout title="Profile" user={user}>
      <div className="profilePage">
        <div>
          <h1>All subscriptions</h1>
          <div>
            <ul>
              {channels.map((channel) => (
                <li key={channel.id} data-id="subList">
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
          </div>
          <h4 className="totalFee">Total fee for all subscriptions: {cost}$</h4>
        </div>
        <div>
          <div className="mySubscriptions">
            <h2>Subscriptions by {user.email}</h2>
            {usersSubscriptions && (
              <ul>
                {usersSubscriptions.map((sub) => (
                  <li key={sub.id}>
                    <h2>
                      <a href={`/channels/${sub.id}`} key={sub.id}>
                        {sub.title}
                      </a>
                    </h2>
                    <a href={`/channels/edit/${sub.id}`} className="editLink">
                      Edit
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {!usersSubscriptions && <h3>You didn't create any subscription</h3>}
          </div>
          <a className="createSubLink" href={`/subscriptions/new/${user.id}`}>
            Create new subscription
          </a>
        </div>
      </div>
    </Layout>
  );
};
