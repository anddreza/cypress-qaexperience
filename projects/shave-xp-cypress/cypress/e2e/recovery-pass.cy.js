/// <reference types="cypress" />

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
		fpPage.submit(email, password)

		const message = 'Enviamos um e-mail para confirmar a recuperação de senha'
		fpPage.noticeShouldBe(message)
	})

	it('deve poder cadastrar uma nova senha', () => {
		const user = {
			name: 'Joao Esquecido',
			email: 'joao@gmail.com',
			password: 'pwd123',
			is_shaver: false
		}
		
		
	})
})