import Sequelize from 'sequelize'
import databaseConfig from '../database'

import Avatar from '../app/models/Avatar'
import User from '../app/models/User'

const models = [User, Avatar]
class Database {
  contructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(databaseConfig)
    models.map(model => model.init(this.connection))
  }
}

export default new Database()