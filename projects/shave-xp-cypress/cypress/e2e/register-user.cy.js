import registerUserPage from '../support/pages/register-user'
import data from '../fixtures/user-register.json'


describe('faça seu cadastro', () => {
    context('quando submeto o formulário', () => {
        it('deve cadastrar usuário com sucesso', () => {
            const user = data.success

            registerUserPage.go()
            cy.deleteUser(user)
            registerUserPage.submit(user.name, user.email, user.password)

            const message = 'Boas vindas, faça login para solicitar serviços!'
            registerUserPage.shared.noticeSuccessShouldBe(message)
        })

        it('não deve recadastrar um email que já existe', () => {
            const user = data.sameEmail

            registerUserPage.go()
            cy.createUser(user)
            registerUserPage.submit(user.name, user.email, user.password)

            const message = 'Oops! E-mail já cadastrado.'
            registerUserPage.shared.noticeErrorShouldBe(message)
        })

        it('campos obrigatórios', () => {
            registerUserPage.submit()
         //   registerUserPage.requiredFields('Nome é obrigatório, 'E-mail é obrigatório', 'Senha é obrigatória')
         cy.get('.alert-error')
         .should('have.length', 3)
         .and(($small) => {
             expect($small.get(0).textContent).to.equal('Nome é obrigatório')
             expect($small.get(1).textContent).to.equal('E-mail é obrigatório')
             expect($small.get(2).textContent).to.equal('Senha é obrigatória')
         })

        })
    })

    context('senha muito curta', () => {
        data.shortpass.forEach((p) => {
            it(`não deve cadastrar com a senha: ${p}`, () => {
               registerUserPage.submit('Papito Rocks', 'papito@teste.com.br', p)
                registerUserPage.shared.alertShouldBe('Pelo menos 6 caracteres')
            })
        })
    })

    context('email no formato incorreto', () => {
        data.invemails.forEach((e) => {
            it(`não deve cadastrar com o email: ${e}`, () => {
                cy.signup('Agatha França', e, 'pwd123')
                registerUserPage.shared.alertShouldBe('Informe um email válido')
            })
        })
    })
})