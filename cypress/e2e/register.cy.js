import signup from '../pages/SignupPage';

describe('Cadastro', { tags: '@smoke' }, () => {
  beforeEach(() => {
    cy.fixture('register').as('register');
  });

  it('tornando-se um entregador', function () {
    signup.go();
    signup.fillForm(this.register.signup);
    signup.submit();

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';

    signup.modalContentShouldBe(expectedMessage);
  });

  it('CPF inválido', function () {
    signup.go();
    signup.fillForm(this.register.cpf_inv);
    signup.submit();

    signup.alertMessageShouldBe('Oops! CPF inválido');
  });
});
