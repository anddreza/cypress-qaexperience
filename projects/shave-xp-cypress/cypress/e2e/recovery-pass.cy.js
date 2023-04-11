import fpPage from '../support/pages/views/forgot-pass'
import rpPage from '../support/pages/views/reset-pass'
import loginPage from '../support/pages/views/login'
import shaversPage from '../support/pages/views/shavers'

	describe ('esqueci minha senha', () => {
		it('deve poder solicitar o resgate de senha', () => {

		const user = {
			name: 'Joao Esquecido',
			email: 'joao@gmail.com',
			password: 'pwd123',
			is_shaver: false
		}

		cy.createUser(user)

		cy.requestPassword(user.email)
		//fpPage.go()
		//fpPage.submit(user.email)

		const message = 'Enviamos um e-mail para confirmar a recuperação de senha, verifique sua caixa de entrada.'
		//fpPage.noticeShouldBe(message)
		cy.noticeSucessShouldBe(message)
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

			//rpPage.go(Cypress.env('passToken'))
			//rpPage.submit('abc123', 'abc123')

			cy.resetPassword(Cypress.env('passToken'), 'abc123', 'abc123')
			const message = 'Agora você já pode logar com a sua nova senha secreta.'
			cy.noticeSucessShouldBe(message)
			
		})

		afterEach(() => {
			cy.submitLogin(user.email, 'abc123')
			cy.userShouldBeLoggedIn(user.name)
			//loginPage.submit(user.email, 'abc123')
			//shaversPage.header.userShouldBeLoggedIn(user.name)
		})
	})
})