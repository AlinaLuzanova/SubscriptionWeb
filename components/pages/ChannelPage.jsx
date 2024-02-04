const React = require('react')
const Layout = require('../Layout')

module.exports = function ChannelPage({ channel, info }) {
  return (
    <Layout title={channel.title}>
      <div className="channelPage">
        <h2>{channel.title}</h2>
        <h3>Subscribe: {channel.cost}$</h3>
        <img src={channel.img} />
        <button data-id={info.id} type="submit">
          Subscribe
        </button>
      </div>
    </Layout>
  )
}
