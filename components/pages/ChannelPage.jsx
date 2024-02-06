const React = require("react");
const Layout = require("../Layout");

module.exports = function ChannelPage({
  channel,
  user,
  subscribers,
  isSubscribed,
}) {
  return (
    <Layout title={channel.title} user={user}>
      <div className="channelPage">
        <div className="channelLeft">
          <h1>{channel.title}</h1>
          <img src={channel.img} alt={channel.title} />
        </div>
        <div className="channelRight">
          <h3>Subscription fee: {channel.cost}$</h3>
          <h3 data-name="subscribers">Amount of subscribers: {subscribers}</h3>
          {user && (
            <>
              {isSubscribed && (
                <div className="unsubscribeBTNWrap">
                  <button
                    className="unsubscribeBTN"
                    data-id={channel.id}
                    data-url={`/api/channel/${channel.id}`}
                    type="submit"
                  >
                    Unsubscribe
                  </button>
                </div>
              )}
              {!isSubscribed && (
                <div className="subscribeBTNWrap">
                  <button
                    className="subscribeBTN"
                    data-id={channel.id}
                    data-url={`/api/channel/${channel.id}`}
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};
