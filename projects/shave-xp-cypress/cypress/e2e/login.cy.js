import loginPage from '../support/pages/login' 
// importando a classe objeto dentro desse login page
import shaversPage from '../support/pages/shaves'

describe('login', () => {

	context('quando submeto o formulário', () => {

		it('deve logar com sucesso', () => {
			const user = {
				name: 'Andressa',
				email: 'andressa@icloud.com',
				password: 'pwd123'
			}

			loginPage.submit(user.email, user.password)

			shaversPage.header.userShouldBeLoggedIn(user.name)
		})


		it('não deve logar com senha incorreta', () => {
			const user = {
				name: 'Andressa',
				email: 'andressa@icloud.com',
				password: 'abc123'
			}


			loginPage.submit(user.email, user.password)

			const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais'

			loginPage.noticeShouldBe(message)
		})

		it('não deve logar com email não cadastrado', () => {
			const user = {
				name: 'Andressa',
				email: 'andre@404.com',
				password: 'abc123'
			}


			loginPage.submit(user.email, user.password)

			const message = 'Ocorreu um erro ao fazer login, verifique suas credenciais'

			loginPage.noticeShouldBe(message)

		})

		

	})

})