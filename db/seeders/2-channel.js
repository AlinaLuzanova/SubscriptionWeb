'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Channels',
      [
        {
          title: 'Flowers',
          cost: 100,
          img: 'https://img.goodfon.ru/original/2880x1800/4/9b/piony-tsvety-listia-lepestvi-butony-peony.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Wylsacom',
          cost: 1000,
          img: 'https://i.ytimg.com/vi/FunnW_yHQ0E/maxresdefault.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Fashion',
          cost: 50,
          img: 'https://womanel.com/wp-content/uploads/2023/03/5.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Channels', null, {})
  },
}
