import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Project = sequelize.define('project', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: DataTypes.STRING,  allowNull: false  }
})


sequelize.sync({
    force: false
})

export default Project
