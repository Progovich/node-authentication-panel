# RU

Репозиторий представляет собой backend и frontend функционал авторизации администратора-пользователя на Node JS.

### Панель аутентификации

При аутентификации пользователю выдаётся **JWT** токен и в дальнейшем при каждом заходе на страницу он проверяется на валидность. Токен несёт в себе payload ID пользователя MongoDB.

Данные пользователя хранятся в **MongoDB**, пароль хранится в виде хэша **bcryptjs** с **Salt Length 12**

Т.к. я использую эту панель только для администратора, то все значения заносятся в БД руками

### Серверная часть

По архитектуре разведены: маршрутизация, представления, контроллеры и модели.  
Подключены NPM.

- Morgan - _логирование при development запуске_
- express-rate-limit - _ограничение на количество запросов к серверу в час_
- helmet - _защита заголовков_
- express-mongo-sanitaze - _санитайзер объектов для замены спец символов_
- xss-clean - санитайзер XSS

И другие стандартные модули для поддержки работы сервера.

### ENV

В конфиг включены следующие переменные.

```sh
MONGO=mongodb+srv://example
PORT=5000
NODE_ENV=development
JWT_SECRET=testsecretkey
JWT_EXPIRES_IN=70d
JWT_COOKIE_EXPIRES_IN=90
```

# EN

The repository is a backend and frontend functionality for administrator-user authorization on Node JS.

### Authentication panel

After authentication, the user receives the **JWT** token and then it is checked for validity every time the page is requested again. The token contains the MongoDB user's payload ID.

The user data is stored in **MongoDB**, the password is stored as a hash **bcryptjs** with **Salt Length 12**

I use this panel only for the administrator, all values are entered in the database independently

### Server part

Server architecture contains routing, views, controllers, and models.

Dependens NPM.

- Morgan - _logging. Only development_
- express-rate-limit - _rate limit per hour_
- helmet - _security HTTP header_
- express-mongo-sanitaze - _sanitaze reserv key of MongoDB _
- xss-clean - sanitaze XSS

And other standard modules to support the work of the server.

### ENV

config.env contains this variable.

```sh
MONGO=mongodb+srv://example
PORT=5000
NODE_ENV=development
JWT_SECRET=testsecretkey
JWT_EXPIRES_IN=70d
JWT_COOKIE_EXPIRES_IN=90
```
