const { defineConfig } = require("cypress");
// importar a classe Pool dentro do arquivo de configuração do cypress
//onst { Pool } = require('pg')   da linha 3 até a linha 13 foram cortados e colados dentro do arquivo database.js na pasta tasks
const { removeUser } = require ('./cypress/support/tasks/database')
//const dbConfig = {
//  host: 'babar.db.elephantsql.com',
//	user: 'knwprhil',
//	password: 'LszmKao6wNjC76J2K5NXow-7DlTX40zG',
//	database: 'knwprhil',
//	port: 5432

//}


module.exports = defineConfig({

  
  e2e: {
    setupNodeEvents(on, config) {
     
      // implementar tasks dentro desse bloco de código 
      on('task', {

          removeUser
        // TUDO QUE ESTAVA AQUI DENTRO FOI PARA A PASTA database.js dentro de tasks 
        // o nome da task vai ser removeUser que vai receber como argumento o email 
      //    removeUser(email){
                // new Promisse abre uma função que recebe um argumento resolve, 
        //    return new Promise(function(resolve){
              // pool é o objeto que já está conectado no banco de dados 
              // [email] é o argumento da massa de teste]
              //callback function, se tiver erro vem no primeiro error, se não entra no segundo result 
              // 
      // IMPORTANTE! -> implementar o acesso ao banco de dados e remover o usuário 
      // esse dbConfig entre parenteses me dá a conexão com o banco de dados 
     // const pool = new Pool(dbConfig)
       //       pool.query('DELETE FROM users WHERE email = $1', [email], function(error, result){
                // se o erro existir deu ruim
         //       if (error){
         //         throw error  
          //      }
          //      // 
           //     resolve({sucess: result})
           //   })
           // }) 


              
       //   }
      })
    },
    env: {
      apiURL: process.env.API_URL,
      apiHelper: process.env.API_HELPER
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: process.env.BASE_URL
  },
});
