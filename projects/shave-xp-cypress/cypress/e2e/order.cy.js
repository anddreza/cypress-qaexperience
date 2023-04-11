import shaversPage from '../support/pages/views/shavers'
import catalogPage from '../support/pages/views/catalog'
import orderPage from '../support/pages/views/order'

import data from '../fixtures/order.json'

describe('pedido', () => {
	context('usuário logado', () => {

		const { customer, shaver, service } = data

		before(() => {
			cy.createUser(customer) //definição de usuário
			cy.apiLogin(customer)
		})


		it('deve poder solicitar serviços', () => {
			cy.selectShaver(shaver.name)
			//shaversPage.selectShaver(shaver.name)
			//catalogPage.hasShaver(shaver.name)
			cy.selectService(service.description)
			//catalogPage.selectService(service.description)
			//catalogPage.hasTitle(service.description)
			cy.confirmOrder()
			//catalogPage.confirmOrder()
			cy.hasOrder()
		
		})

	})

})
