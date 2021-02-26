module.exports = (sequelize, type) => {

    return sequelize.define('auth_user', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          allowNull: false
        },
        username: {
            type: type.STRING,
            allowNull: false
          },
          email: {
            type: type.STRING,
            allowNull: false
          },
        password: type.STRING
    })    
}