import * as data from "../helpers/default_data.json"                                                // Импорт валидных данных для авторизации
import * as main from "../locators/main_page.json"                                                  // Импорт локаторов главной страницы
import * as recovery from "../locators/recovery_password_page.json"                                 // Импорт локаторов страницы восстановления пароля
import * as result from "../locators/result_page.json"                                              // Импорт локаторов страницы результата

describe('Verification of authorization', function () {

    /*
    Выполнить перед каждым тестом
    */
    beforeEach('Before each test', function () {
        cy.visit('/');                                                                              // Зайти на сайт
        cy.get(main.title).should('be.visible');                                                    // Название страницы видно
        cy.get(main.title).contains('Вход на сайт');                                                // Название страницы содержит текст ""
        cy.get(main.login_button).should('be.visible');                                             // Кнопку "Войти" видно
        cy.get(main.forgot_pass_btn).should('be.visible');                                          // Кнопку для восстановления пароля видно
        cy.get(main.forgot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');                // Кнопка для восстановления пароля определённого цвета
        cy.get(main.footer).should('be.visible');                                                   // Футер со ссылкой на сайт видно
    });

    /*
    Выполнить после каждого теста
    */
    afterEach('After each test', function () {
        cy.get(result.close).should('be.visible');                                                  // Кнопку "Х" видно
        cy.get(result.title).should('be.visible');                                                  // Название страницы видно
        cy.get(result.footer).should('be.visible');                                                 // Футер со ссылкой на сайт видно
    });

    /*
    Авторизация с верным e-mail и верным паролем
    */
    it('The correct email address and the correct password', function () {
        cy.get(main.email).type(data.email);                                                        // Вводим валидный email
        cy.get(main.password).type(data.password);                                                  // Вводим валидный пароль
        cy.get(main.login_button).click();                                                          // Нажимаем кнопку "Войти"
        
        cy.get(result.title).contains('Успешный вход');                                             // Название страницы содержит текст ""
    });
    
    /*
    Восстановление пароля с валидным e-mail
    */
    it('Password recovery with the correct email address', function () {
        cy.get(main.forgot_pass_btn).click();                                                       // Нажимаем кнопку "Забыли пароль?"

        cy.get(recovery.close).should('be.visible');                                                // Кнопку "Х" видно
        cy.get(recovery.title).should('be.visible');                                                // Название страницы видно
        cy.get(recovery.footer).should('be.visible');                                               // Футер со ссылкой на сайт видно
        cy.get(recovery.title).contains('Восстановить пароль');                                     // Название страницы содержит текст ""
        cy.get(recovery.email).type(data.email);                                                    // Вводим валидный email
        cy.get(recovery.send_button).click();                                                       // Нажимаем кнопку "Отправить код"

        cy.get(result.title).contains('Пароль отправлен на e-mail');                                // Название страницы содержит текст ""
    });
    
    /*
    Восстановление пароля с невалидным e-mail
    */
    it('Password recovery with the incorrect email address', function () {
        cy.get(main.forgot_pass_btn).click();                                                       // Нажимаем кнопку "Забыли пароль?"

        cy.get(recovery.close).should('be.visible');                                                // Кнопку "Х" видно
        cy.get(recovery.title).should('be.visible');                                                // Название страницы видно
        cy.get(result.footer).should('be.visible');                                                 // Футер со ссылкой на сайт видно
        cy.get(recovery.title).contains('Восстановить пароль');                                     // Название страницы содержит текст ""
        cy.get(recovery.email).type('roman.ru');                                                    // Вводим невалидный email
        cy.get(recovery.send_button).click();                                                       // Нажимаем кнопку "Отправить код"

        cy.get(result.title).contains('Введите валидный e-mail');                                   // Название страницы содержит текст ""
    });

    /*
    Авторизация с верным e-mail и неверным паролем
    */
    it('The correct email address and the incorrect password', function () {
        cy.get(main.email).type(data.email);                                                        // Вводим валидный email
        cy.get(main.password).type('iLoveQA+2');                                                    // Вводим невалидный пароль
        cy.get(main.login_button).click();                                                          // Нажимаем кнопку "Войти"

        cy.get(result.title).contains('Неверный логин или пароль');                                 // Название страницы содержит текст ""
    });

    /*
    Авторизация с неверным e-mail и верным паролем
    */
    it('The incorrect email address and the correct password', function () {
        cy.get(main.email).type('incorrect@incorrect.ru');                                          // Вводим невалидный email
        cy.get(main.password).type(data.password);                                                  // Вводим валидный пароль
        cy.get(main.login_button).click();                                                          // Нажимаем кнопку "Войти"

        cy.get(result.title).contains('Неверный логин или пароль');                                 // Название страницы содержит текст ""
    });

    /*
    Авторизация с невалидным e-mail и верным паролем
    */
    it('The email address without @ and the correct password', function () {
        cy.get(main.email).type('incorrect.ru');                                                    // Вводим невалидный email
        cy.get(main.password).type(data.password);                                                  // Вводим валидный пароль
        cy.get(main.login_button).click();                                                          // Нажимаем кнопку "Войти"

        cy.get(result.title).contains('Введите валидный e-mail');                                   // Название страницы содержит текст ""
    });

    /*
    Авторизация с верным e-mail содержащим большие буквы и верным паролем
    */
    it('The correct email address with uppercase letters and the correct password', function () {
        cy.get(main.email).type('Roman@Grand.ru');                                                  // Вводим валидный email с большими буквами
        cy.get(main.password).type(data.password);                                                  // Вводим валидный пароль
        cy.get(main.login_button).click();                                                          // Нажимаем кнопку "Войти"

        cy.get(result.title).contains('Успешный вход');                                             // Название страницы содержит текст ""
    });

});
 
// запуск через теринал находясь в папке проекта: npx cypress run --spec cypress/e2e/tests_login-login.gromqa.ru.cy.js --browser chrome
 