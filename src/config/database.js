module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 15438,
  database: sequelize,
  username: postgres,
  password: 123456,
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  }
}