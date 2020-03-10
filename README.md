# react-atomic-tasker [Español]
Esta aplicación esta basada en el clásico proyecto para aprender TodoList. A diferencia de este incluye las caracteristicas avanzadas siguientes:
- Configuración con webpack (No create-react-app)
- Testing (testing-library)
- Componentes atomizados
- Authenticación con firebase
- Drag and Drop (TODO)
- CSS Modules
- SASS

## Instalación y ejecución local
Descarga el repositorio e instala las dependencias.

Crea un nuevo proyecto en firebase con autenticación simple por email.

Crea el archivo `.env` en el directorio raiz del proyecto con la configuración de firebase.
```js
FIREBASE_KEY = "aqui va tu firebase key"
FIREBASE_DOMAIN = "aqui va tu firebase domain"
FIREBASE_DATABASE = "aqui va tu firebase database"
FIREBASE_PROJECT_ID = "aqui va tu firebase project id"
FIREBASE_STORAGE_BUCKET = "aqui va tu firebase storage bucket"
FIREBASE_SENDER_ID = "aqui va tu firebase sender id"
FIREBASE_APP = "aqui va tu firebase app"
```

Ejecutas en tu terminal  `yarn start`  o `npm start`

## Test y Coverage
`yarn test`

`yarn test:coverage`

-----------------
# react-atomic-tasker [English]
This application is based on the clasic learning project TodoList. But this contains the following advance features:
- Webpack configuration (No create-react-app)
- Testing (testing-library/react)
- Atomic componets
- Firebase authentication (TODO)
- Drag and Drop (TODO)
- CSS Modules
- SASS

## Installing and running the application locally
Download the repository and install the dependencies.

Create a new firebase project with basic email authentication.

Create the `.env` file in the root project directory with the firebase api configuratione.
```js
FIREBASE_KEY = "here your firebase key"
FIREBASE_DOMAIN = "here your firebase domain"
FIREBASE_DATABASE = "here your firebase database"
FIREBASE_PROJECT_ID = "here your firebase prject id"
FIREBASE_STORAGE_BUCKET = "here your firebase sotrage bucket"
FIREBASE_SENDER_ID = "here your firebase sender id"
FIREBASE_APP = "here your firebase app"
```
Run in your terminal  `yarn start`  o `npm start`

## Test y Coverage
`yarn test`

`yarn test:coverage`