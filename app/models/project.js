import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Project = sequelize.define('project', {
    name: { type: DataTypes.STRING,  allowNull: false },
    description: { type: DataTypes.STRING,  allowNull: true },
    ready: { type: DataTypes.BOOLEAN,  defaultValue: false },
})

export default Project
