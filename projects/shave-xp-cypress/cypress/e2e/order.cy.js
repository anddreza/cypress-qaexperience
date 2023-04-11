import loginPage from '../support/pages/login'
import shaversPage from '../support/pages/shaves'
import catalogPage from '../support/pages/catalog'
import orderPage from '../support/pages/order'

import data from '../fixtures/order.json'


describe('pedido', () => {
	context('usuário logado', () => {

		const { customer, shaver, service } = data

		before(() => {
			cy.createUser(customer) //definição de usuário
			cy.apiLogin(customer)
		})


		it('deve poder solicitar serviços', () => {
			
			shaversPage.selectShaver(shaver.name)
			catalogPage.hasShaver(shaver.name)

			catalogPage.selectService(service.description)
			catalogPage.hasTitle(service.description)
			
			catalogPage.confirmOrder()
			orderPage.hasOrder()
		
		})

	})

})
