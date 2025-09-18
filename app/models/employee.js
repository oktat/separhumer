import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Employee = sequelize.define('employee', {
    name: { type: DataTypes.STRING,  allowNull: false  },
    city: { type: DataTypes.STRING,  allowNull: false  },
    salary: { type: DataTypes.INTEGER,  allowNull: true  },
})

export default Employee
