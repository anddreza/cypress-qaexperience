/*import shared from '../../shared'
// ṔascalCase - padrão oficial para criar classes em JS
class Loginpage {

	// 	Aqui temos PageObject, temos aqui o encapsulamento
	constructor(){
		this.alertError = '.alert-error'
		this.shared = shared
	}
	// submit email = null, password = null
	submit(email = null, password = null) { // função submit e com todos os steps para clicar no botão de 'Entrar'
		cy.visit('/')

		cy.get('input[placeholder$=email]').as('email')
		cy.get('input[placeholder*=senha]').as('password')

		if (email) {
			cy.get('@email').type(email)
			// agora que tenho o as('@email')

		}
		if (password) {
			cy.get('@password').type(password)
			// agora que tenho o as('@password)
		}


		//cy.get('input[placeholder$=email]').type(email)

		//cy.get('input[placeholder*=senha]').type(password)

		cy.contains('button', 'Entrar')
			.click()
	}


	requiredFields(emailMessage, passwordMessage) {
		cy.get(this.alertError)
			.should('have.length', 2)
			.and(($small) => { // o $ é porque está buscando um elemento HTML 
				expect($small.get(0).textContent).to.equal(emailMessage)
				expect($small.get(1).textContent).to.equal(passwordMessage)

			})
	}
}

export default new Loginpage()
// new é a palavra reservada que ativa a classe, e o objeto que importar já pode usa-la 
*/