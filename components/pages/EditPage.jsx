const React = require("react");
const Layout = require("../Layout");

module.exports = function EditPage({ title, user, channel }) {
  return (
    <Layout title={title} user={user}>
      <div className="editPage">
        <div className="channelLeft">
          <h1>Edit {channel.title}</h1>
          <form
            data-url={`/api/channels/edit/${channel.id}`}
            name="editPageForm"
            action={`/api/channels/edit/${channel.id}`}
            className="edit-create-form"
          >
            <label>
              Channel title
              <input type="text" name="title" defaultValue={channel.title} />
            </label>
            <label>
              Monthly cost
              <input type="text" name="cost" defaultValue={channel.cost} />
            </label>
            <label>
              Link for image
              <input type="text" name="image" defaultValue={channel.img} />
            </label>
            <button type="submit" className="editCreateBTN">
              Edit
            </button>
          </form>
        </div>
        <div className="channelRight">
          <img className="editIMG" src={channel.img} alt="No image" />
        </div>
      </div>
    </Layout>
  );
};
