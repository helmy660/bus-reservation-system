require('dotenv').config({ path: ".env" });

module.exports = {
    name: 'default',
    charset: 'utf8mb4',
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    database: process.env.TYPEORM_DATABASE,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    synchronize: false,
    entities: ['src/entities/ecommerce/**/*.ts'],
    migrations: ['src/migrations/**/*.ts']
}
