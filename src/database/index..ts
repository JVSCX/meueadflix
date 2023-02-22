import { Sequelize } from "sequelize"

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'meueadflix_development',
  username: 'meueadflix',
  password: 'meueadflix',
	define: {
    underscored: true
  }
})