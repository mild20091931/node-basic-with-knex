module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      database: 'test_ask',
      user: 'root',
      password: '',
    },
    pool: {
      min: process.env.DATABASE_POOL_MIN,
      max: process.env.DATABASE_POOL_MAX,
    },
    migrations: {
      directory: './src/db/migrations',
    },
    seeds: {
      directory: './src/db/seeds',
    },
  },
};
