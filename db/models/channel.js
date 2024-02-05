'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      Channel.belongsToMany(User, {
        through: 'UserChannels',
        foreignKey: 'channel_id',
      })
    }
  }
  Channel.init(
    {
      title: DataTypes.STRING,
      cost: DataTypes.INTEGER,
      img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Channel',
    },
  )
  return Channel
}
