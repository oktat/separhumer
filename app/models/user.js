import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const User = sequelize.define('user', {
    name: { type: DataTypes.STRING,  allowNull: false  },
    email: { type: DataTypes.STRING,  allowNull: false  },
    password: { type: DataTypes.STRING,  allowNull: false },
    roleId: { type: DataTypes.INTEGER,  allowNull: true }
})

export default User
