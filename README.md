<h2>UI Автотесты на фреймворке Cypress</h2>

> **Статус проекта:**
> Публичный проект: https://login.gromqa.ru/
> 
> 🟢 Поддерживается (активный) 

## Описание проекта и задачи
Автоматизировать часть проверок регресса с помощью Cypress

## Тест-кейсы, которые автоматизировали
* Авторизация с верным e-mail и верным паролем
* Восстановление пароля с валидным e-mail
* Восстановление пароля с невалидным e-mail
* Авторизация с верным e-mail и неверным паролем
* Авторизация с неверным e-mail и верным паролем
* Авторизация с невалидным e-mail и верным паролем
* Авторизация с верным e-mail содержащим большие буквы и верным паролем

## Детали реализации

1. baseUrl вынесен в переменные конфига
![image](static/baseUrl.png)

1. Применение хуков beforeEach и afterEach
![image](static/hooks.png)

1. Переменные данные для авторизации вынесены в отдельный файл
![image](static/default_data.png)

1. Каждая страница описана в формате объекта с локаторами
![image](static/locators.png)

## Локальный запуск тестов (из терминала)
1. Скачать проект
2. Перейти в терминале в директорию проекта
2. Выполнить команду:
```
npx cypress run --spec cypress/e2e/lesson_locators.cy.js --browser chrome
```
Ожидаемый результат: получим отчет о прохождении тестов.
![image](static/Cypress_cli.png)


## Локальный запуск через Cypress UI
1. Скачать проект и открыть в терминале.
2. Перейти в директорию проекта.
3. В терминале в папке с проектом запустить npm `install --save-dev cypress@12.7.0`
4. В терминале в папке с проектом запустить npm `npm i`
5. В терминале в папке с проектом запустить npm `npx cypress open`
6. Выбрать в Cypress UI E2E тестирование и браузер Google Chrome
7. Выбрать спеку tests_login-login.gromqa.ru

Ожидаемый результат: получим отчет о прохождении тестов.
![image](static/Cypress_UI.png)


## Автор

Роман Гранд ([@r_grand](https://t.me/r_grand))
