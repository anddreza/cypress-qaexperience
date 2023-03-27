const express = require ('express')
const app = express ()

app.use(express.json())

const { deleteUser } = require('./db')

app.get('/welcome', function(req, res){
	res.json({message: 'Olá'})
})

app.delete('/user/:email', async function(req, res){
	
	const { email } = req.params
	await deleteUser(email)
	res.status(204).end()
})

app.post('/user', async function(req, res){
	
})

app.listen(5000)