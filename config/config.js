require('dotenv').config()
module.exports = {
	"development": {
		"username": process.env.DB_USERNAME || "postgres",
		"password": process.env.DB_PASSWORD || null,
		"database": process.env.DB_DATABASE || "kackle",
		"host": process.env.DB_HOST || '127.0.0.1',
		"dialect": "postgres"
	},
	"test": {
		"username": "root",
		"password": null,
		"database": "database_test",
		"host": "127.0.0.1",
		"dialect": "mysql"
	},
	"production": {
		"use_env_variable": "DATABASE_URL",
    	"dialectOptions": {"ssl": { "require": true, "rejectUnauthorized": false }}
	}
}
