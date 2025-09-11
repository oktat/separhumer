import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Rank = sequelize.define('rank', {
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

export default Rank
