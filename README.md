# Gila

### Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Project Structure
The project is structured into two main packages:

* `notification-service`: Contains the backend service.
* `notification-ui`: Contains the frontend user interface.

>Make sure you have the following software installed on your machine:

* Docker
* Node.js
* Yarn
* Mongo

#### Installation
1. Create a copy of the `.env.sample` file and rename it to `.env`:
```bash
  cp packages/notification-service/.env.sample packages/notification-service/.env
```
2. Open the `.env` file and fill in the required information.

#### Running the Project
The project can be run in two different ways:

1. Using Docker Compose

To run the project using Docker Compose, execute the following command:
```bash
  docker-compose --env-file packages/notification-service/.env up --build -d
```
This command will start the project and create a MongoDB container if it's not already running.

#### Running Independently

To run the project independently without Docker Compose, follow these steps in root dir:
Install the dependencies:
```bash
  yarn install
```
Start the backend service and frontend user interface:
```bash
  yarn dev
```
The backend service will start running at <backend-url> and the frontend user interface will be accessible at <frontend-url>.

> you will need to start a mongo db service

Bellow is the whole service arquitecture
packages/notification-service
├── Dockerfile
├── coverage
│   ├── clover.xml
│   ├── coverage-final.json
│   ├── lcov-report
│   │   ├── application
│   │   │   ├── index.html
│   │   │   ├── index.ts.html
│   │   │   ├── notificationFactory.ts.html
│   │   │   └── notificationTypes.ts.html
│   │   ├── base.css
│   │   ├── block-navigation.js
│   │   ├── domain
│   │   │   ├── entities
│   │   │   │   ├── FinanceEntity.ts.html
│   │   │   │   ├── MoviesEntity.ts.html
│   │   │   │   ├── SportsEntity.ts.html
│   │   │   │   ├── index.html
│   │   │   │   └── index.ts.html
│   │   │   ├── index.html
│   │   │   └── index.ts.html
│   │   ├── favicon.png
│   │   ├── index.html
│   │   ├── prettify.css
│   │   ├── prettify.js
│   │   ├── sort-arrow-sprite.png
│   │   └── sorter.js
│   └── lcov.info
├── jest.config.js
├── logs
│   └── error.log
├── nodemon.json
├── package.json
├── src
│   ├── Notification
│   │   ├── application
│   │   │   ├── __test__
│   │   │   │   └── Factory.test.ts
│   │   │   ├── index.ts
│   │   │   ├── notificaitonProccesor.ts
│   │   │   ├── notificationFactory.ts
│   │   │   ├── notificationServices
│   │   │   │   ├── EmailNotification.ts
│   │   │   │   ├── PushNotification.ts
│   │   │   │   └── SMSNotification.ts
│   │   │   └── notificationTypes.ts
│   │   ├── domain
│   │   │   ├── NotificationRepository.ts
│   │   │   ├── entities
│   │   │   │   ├── FinanceEntity.ts
│   │   │   │   ├── MoviesEntity.ts
│   │   │   │   ├── SportsEntity.ts
│   │   │   │   ├── __test__
│   │   │   │   │   ├── Finance.test.ts
│   │   │   │   │   ├── Movie.test.ts
│   │   │   │   │   └── Sports.test.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   └── infraestructure
│   │       ├── gateways
│   │       │   ├── EmailNotificator.ts
│   │       │   ├── PushNotificator.ts
│   │       │   ├── SMSNotficator.ts
│   │       │   └── index.ts
│   │       ├── httpHandlers
│   │       │   ├── index.ts
│   │       │   └── schemas.ts
│   │       └── repositories
│   │           ├── index.ts
│   │           ├── notifications.ts
│   │           └── users.ts
│   ├── index.ts
│   ├── infraestructure
│   │   ├── config
│   │   │   └── index.ts
│   │   ├── db
│   │   │   ├── collections
│   │   │   │   └── notifications.ts
│   │   │   └── connection
│   │   │       └── index.ts
│   │   ├── faker
│   │   │   ├── users.json
│   │   │   └── users.ts
│   │   └── server.ts
│   └── shared
│       ├── infra
│       │   └── logs
│       │       └── index.ts
│       └── repositories
│           └── NotificationService.ts
└── tsconfig.json

29 directories, 63 files
packages/notification-ui
├── Dockerfile
├── __mocks__
│   └── styleMock.js
├── index.html
├── jest.config.cjs
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── app
│   │   ├── components
│   │   │   └── App.jsx
│   │   ├── index.js
│   │   └── styles
│   │       └── styles.css
│   ├── entities
│   │   └── logs
│   │       ├── index.js
│   │       ├── model
│   │       │   └── index.js
│   │       └── ui
│   │           ├── index.js
│   │           ├── log-row
│   │           │   ├── index.jsx
│   │           │   ├── log.styles.js
│   │           │   └── log.test.js
│   │           └── sendNotification
│   │               ├── index.jsx
│   │               ├── notification.style.js
│   │               └── notification.test.js
│   ├── main.jsx
│   ├── pages
│   │   ├── index.jsx
│   │   ├── root
│   │   │   ├── Root.jsx
│   │   │   ├── Root.styled.js
│   │   │   └── index.js
│   │   └── routers
│   │       ├── Routing.jsx
│   │       └── router.jsx
│   ├── shared
│   │   ├── api
│   │   │   ├── base.js
│   │   │   └── index.js
│   │   ├── components
│   │   │   └── toast
│   │   │       └── index.jsx
│   │   └── config
│   │       └── index.js
│   └── widgets
│       └── list-logs
│           ├── index.js
│           ├── list.style.js
│           ├── ui.jsx
│           └── ui.test.js
└── vite.config.js

23 directories, 34 files
