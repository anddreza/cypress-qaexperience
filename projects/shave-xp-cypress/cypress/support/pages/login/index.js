// ṔascalCase - padrão oficial para criar classes em JS
class Loginpage {
	// 	Aqui temos PageObject, temos aqui o encapsulamento

	submit(email, password) { // função submit e com todos os steps para clicar no botão de 'Entrar'
		cy.visit('/')

		cy.get('input[placeholder$=email]').type(email)

		cy.get('input[placeholder*=senha]').type(password)

		cy.contains('button', 'Entrar')
			.click()
	}

	noticeShouldBe(message) {
		cy.get('.notice-container')
			.should('be.visible')
			.find('.error p')
			.should('have.text', message)


	}

}

export default new Loginpage()
// new é a palavra reservada que ativa a classe, e o objeto que importar já pode usa-la 