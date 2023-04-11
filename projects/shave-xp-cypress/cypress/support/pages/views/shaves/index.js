import header from '../components/header'

class ShaversPage{

	//noticeShouldBe(message) {
	//	cy.get('.notice-container')
	//		.should('be.visible')
	//		.find('.error p')
	//		.should('have.text', message)
	// Isso foi para class Header dentro da pasta header


	//}
	/*userShouldBeLoggedIn(name){
		cy.get('.logged-user div a)
			.should('be.visible')
			.should('have.text', 'Olá, ' + name)
	} */
	constructor(){ // uma função que é ativado automaticamente quando chamado a classe
		this.header = header
		// criando um objeto chamado header dentro da página Shavers
		// this é para criar um objeto dentro da classe, quando chamar shaverspage vai catalogar o cabeçalho e vai me dar automaticamente 
		
	}

	selectShaver(name){
		cy.contains('figcaption h3', name)
				.should('be.visible')
				.click()
	}
}

export default new ShaversPage()
// importanto usar para exportar 