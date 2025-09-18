import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const Rank = sequelize.define('rank', {
    name: { type: DataTypes.STRING,  allowNull: false  },    
})

export default Rank
