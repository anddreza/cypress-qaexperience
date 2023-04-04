import fpPage from "../support/pages/forgot-pass"
import rpPage from '../support/pages/reset-pass'
descibre ('Esqueci minha senha',() => {
	it('Deve poder solicitar o resgate de senha', () => {

		const user = {
			name: 'Joao Esquecido',
			email: 'joao@gmail.com',
			password: 'pwd123',
			is_shaver: false
		}

		cy.createUser(user)

		fpPage.go()
		fpPage.submit(user.email)

		const message ='Enviamos um e-mail para confirmar a recuperação de senha, verifique sua caixa de entrada.'
		fpPage.noticeShouldBe(' ')
	})

	context('quando o usuário solicita regaste de senha', () => {
		
			const user = {
				name: 'Will Souza',
				email: 'will@gmail.com',
				password: 'pwd123',
				is_shaver: false
			}
	
			beforeEach(() => {
				cy.createUser(user)
				cy.recoveryPass(user.email)
				cy.getToken(user.email)
			})

			
			it('deve poder cadastrar uma nova senha', () => {

			rpPage.go(Cypress.env('passToken'))
			cy.log(Cypress.env('passToken'))
	
		})
	})
	
})