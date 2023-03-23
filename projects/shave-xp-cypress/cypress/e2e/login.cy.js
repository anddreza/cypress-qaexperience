/// <reference types="cypress" />
import loginPage from '../support/pages/login'
// importando a classe objeto dentro desse login page
import shaversPage from '../support/pages/shaves'
import header from '../support/components/header'
import data from '../fixtures/users.json' //importando o json dentro do login.cy.js


describe('login', () => {

	context('quando submeto o formulário', () => {

		it('deve logar com sucesso', () => {
			const user = data.sucess 
// foi transferido para users.json
			loginPage.submit(data.email, data.password)
			//userShouldLoggenIn(user.name)
			//loginPage.userShouldBeLoggenIn(user.name) -> é uma validação. 
			shaversPage.header.userShouldBeLoggedIn(data.name) // chamando a validação que informa o usuário correto na página correta
		})


		it('não deve logar com senha incorreta', () => {
		
			const user = data.invpass
			loginPage.submit(user.email, user.password)

			const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
			loginPage.noticeShouldBe(message)

		})

		it('não deve logar com email não cadastrado', () => {
			const user = data.email404

			loginPage.submit(user.email, user.password)

			const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
			loginPage.noticeShouldBe(message)

		})

		// enviando uma string vazia 
		// cypress não entende isso 
		it('campos obrigatórios', () =>{
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
			it(`não deve logar com a senha: ${p}`, ()=> {
				loginPage.submit('andressa@icloud.com', p)
				loginPage.alertShouldBe('Pelo menos 6 caracteres')	

			})
		})
	})

	context('email no formato incorreto', () => {
		
		data.invemails.forEach((e) => {
			it(`não deve logar com a senha: ${e}`, ()=> {
				loginPage.submit(e, 'pwd123')
				loginPage.alertShouldBe('Informe um email válido')


			})
		})
	})
})