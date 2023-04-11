/*class ForgotPassPage {
// função que vai acessar a pagina
	go(){
		cy.visit('/forgot-password')
		
		// checkpoint para garantir que estamos indo para o lugar certo 
		cy.get('form h1')
			.should('have.text', 'Recuperar senha')
		}

	// submete o formulario de solicitação de troca de senha
	submit(email){
		cy.get('input[placeholder$=mail]')		
			.type(email)

		cy.contains('button', 'Recuperar')
			.click()	
	}

	noticeShouldBe(expectedText){
		cy.get('.notice p', { timeout: 10000 })
			.should('be.visible')
			.should('have.text', expectedText)
	}
}

export default new ForgotPassPage()
*/