import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

console.log('SSL', process.env.SSL);

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  sync: { force: false },
  timezone: '-03:00',
  dialectOptions: process.env.SSL === true ? {
    ssl: {
      require: true, // Force SSL/TLS
      rejectUnauthorized: false // Allow self-signed certificates, use `true` in production
    }
  } : {},
});

export default sequelize;
