import Sequelize, {Model} from 'sequelize'

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        avatar_name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    )
  }
}

export default User;