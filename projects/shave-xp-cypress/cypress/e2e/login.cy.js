import data from '../fixtures/users-login.json'


describe('login', () => {

	context('quando submeto o formulário', () => {
		it('deve logar com sucesso', () => {
			
			const user = data.success
			cy.createUser(user)
			// loginPage.submit(user.email, user.password) -> Aula 2 			
			cy.submitLogin(user.email, user.password)
			// shaversPage.userShouldBeLoggedIn(user.name) ->  Aula 2
			cy.userShouldBeLoggedIn(user.name)
			// header.userShouldBeLoggedIn(user.name) -> Aula 2
		})


		it('não deve logar com senha incorreta', () => {
			const user = data.invpass
			//loginPage.submit(user.email, user.password)
			cy.submitLogin(user.email, user.password)
			const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
			//loginPage.shared.noticeErrorShouldBe(message)
			cy.noticeErrorShouldBe(message)
		})

		it('não deve logar com email não cadastrado', () => {
			const user = data.email404

			//loginPage.submit(user.email, user.password)
			cy.submitLogin(user.email, user.password)
			const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais.'
			//loginPage.shared.noticeErrorShouldBe(message)
			cy.noticeErrorShouldBe(message)
		})

		it('campos obrigatórios', () => {
			//loginPage.submit()
			cy.submitLogin()

			cy.get('.alert-error')
			.should('have.length', 2)
			.and(($small) => { // o $ é porque está buscando um elemento HTML 
				expect($small.get(0).textContent).to.equal('E-mail é obrigatório')
				expect($small.get(1).textContent).to.equal('Senha é obrigatória')
			})
		})
	})

	context('senha muito curta', () => {
		data.shortpass.forEach((p) => {

			it(`não deve logar com a senha: ${p}`, () => {
				cy.submitLogin('andressa@icloud.com', p)
				//loginPage.submit('andressa@icloud.com', p)
				//loginPage.shared.alertShouldBe('Pelo menos 6 caracteres')
				cy.alertShouldBe('Pelo menos 6 caracteres')
			})
		})
	})

	context('email no formato incorreto', () => {
		data.invemails.forEach((e) => {
			it(`não deve logar com o email: ${e}`, () => {
				cy.submitLogin(e, 'pwd123')
				//loginPage.submit(e, 'pwd123')
				//loginPage.shared.alertShouldBe('Informe um email válido')
				cy.alertShouldBe('Informe um email válido')
			})
		})
	})
})
