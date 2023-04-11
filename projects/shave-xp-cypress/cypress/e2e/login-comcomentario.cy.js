import loginPage from '../support/pages/views/login'
// importando a classe objeto dentro desse login page
import shaversPage from '../support/pages/views/shavers'
//import header from '../support/components/header'
//import {sucess, invpass, email404} from '../fixtures/users-login.json' //importando o json dentro do meu teste 
import data from '../fixtures/users-login.json'


describe('login', () => {


	/** beforeEach(() => {
	 * 	cy.fixture('users).then(function(data){
	 * 		this.data = data // objeto de contexto dentro do describe
	 * 	})
	 * }}) */
	context('quando submeto o formulário', () => {

		it.only('deve logar com sucesso', () => {
			//const user = 
			// foi transferido para users.json, virou um arquivo json para melhorar a visualização e não ficar hardcode?

			//Aqui não teria como rodar tudo de uma vez, porque ele irá rodar os dois steps de remoção e criação de usuário ao mesmo tempo e pode ser que tenha problema de fluxo, o teste é procedural, o teste é step by step, e essa task não de removeUser não vai esperar a finalização dela para poder rodar a task de cadastro de usuário AI FINALMENTE ENTRA A PROMESSA EM JS (cypress.config.js)

			// dado que tenho um usuário cadastrado
			const user = data.success
			cy.createUser(user)
			// step que apaga o usuário 
			// invocar a task que desenvolvemos, o nome dela é removeUser, o que essa massa recebe? user.email, callback then pega o resultado dessa operação no banco de dados 
			// Essa função de remover e criar um novo usuário foi removido daqui e encapsulado dentro de commands.js
			//	cy.task('removeUser', user.email)
			//		.then(function(result){
			//			cy.log(result)
			//		})

			// Aqui ele está criando um usuário novo, se caso deletar no banco o teste funcionará novamente, tem que automatizar o DELETE 
			// step que cadastra o usuário SÓ PARA DEPOIS ABRIR A PÁGINA E FAZER O LOGIN COM SUCESSO 
			//	cy.request({
			//		method: 'POST',
			//		url: 'http://localhost:3333/users',
			//		body: user //vai mandar a const user que de acordo com a nossa implementação já é a massa de teste no formato perfeito 
			//	}).then(function(response){
			// o response vai ser exatamente o que virá da API, será a resposta com o corpo e o status de criado 
			//		expect(response.status).to.eq(201)
			//	})
			// quando faço login com esse usuário
			loginPage.submit(user.email, user.password)
			//cy.submitLogin(user.email, user.password)
			//userShouldLoggenIn(user.name)
			//loginPage.userShouldBeLoggenIn(user.name) -> é uma validação. 

			// entao sou autenticado com sucesso
			shaversPage.header.userShouldBeLoggedIn(user.name) // chamando a validação que informa o usuário correto na página correta			
		})


		it('não deve logar com senha incorreta', () => {
			const user = data.invpass

			loginPage.submit(user.email, user.password)

			const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
			loginPage.shared.noticeErrorShouldBe(message)

		})

		it('não deve logar com email não cadastrado', () => {

			const user = data.email404

			loginPage.submit(user.email, user.password)

			const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
			loginPage.shared.noticeErrorShouldBe(message)

		})

		// enviando uma string vazia 
		// cypress não entende isso 
		it('campos obrigatórios', () => {
			//loginPage.submit('', '')
			loginPage.submit()
			loginPage.requiredFields('E-mail é obrigatório', 'Senha é obrigatória')
			// cy.get('.alert-error') ao invés de usar o get uso o contains
			// .should('have.text', 'E-mail é obrigatório)
			// should('be.visible')

			// cy.get('.alert-error')
			// should('have.text', 'Senha é obrigatória')
			// should('be.visible')



		})
	})

	context('senha muito curta', () => {

		data.shortpass.forEach((p) => {

			it(`não deve logar com a senha: ${p}`, () => {
				loginPage.submit('andressa@icloud.com', p)
				loginPage.shared.alertShouldBe('Pelo menos 6 caracteres')

			})
		})
	})

	context('email no formato incorreto', () => {
		data.invemails.forEach((e) => {
			it(`não deve logar com o email: ${e}`, () => {
				loginPage.submit(e, 'pwd123')
				loginPage.shared.alertShouldBe('Informe um email válido')
			})
		})
	})
})
