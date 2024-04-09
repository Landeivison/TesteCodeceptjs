Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user', 'lan@gmail.com')
    I.fillField('#password', secret('123456'))
    I.click('#btnLogin')
    I.waitForText('Login realizado', 3)
    
});

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user', 'lan@gmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.')

    
});

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')

    
});

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')

    
});

Scenario('Tentando Logar sem preencher os campos e-mail e senha',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/')

    
});

