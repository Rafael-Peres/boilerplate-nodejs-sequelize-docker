import Sequelize, {Model} from 'sequelize'

class UserOvo extends Model {
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

export default UserOvo;