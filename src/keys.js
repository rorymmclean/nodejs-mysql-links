module.exports = {

    database: {
        connectionLimit: 10,
        host: process.env.DATABASE_HOST || 'mysql',
        user: process.env.DATABASE_USER || 'root',
        password: process.env.DATABASE_PASSWORD || 'root',
        database: process.env.DATABASE_NAME || 'openemr'
    }

};