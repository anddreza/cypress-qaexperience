const { Pool } = require('pg')
const dbConfig = {
	host: 'babar.db.elephantsql.com',
	user: 'knwprhil',
	password: 'LszmKao6wNjC76J2K5NXow-7DlTX40zG',
	database: 'knwprhil',
	port: 5432
}

const pool = new Pool ('dbConfig')

async function deleteUser (email){
	await pool.query('DELETE FROM users WHERE email = $1', [email])

}

async function insertUser (user){
	
}

module.exports = {
	deleteUser,
	insertUser
}