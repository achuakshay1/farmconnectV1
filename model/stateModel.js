module.exports = (sequelize, type) => {

    return sequelize.define('data_master_states', {
        state_name: {
          type: type.STRING,
          allowNull: false
        },
        state_code: type.STRING
    })    
}