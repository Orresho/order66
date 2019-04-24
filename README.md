This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Get Started Locally
- Clone project
- Install dependencies with `yarn` or `npm install` in the project directory
- Start the [Boxinator server](https://github.com/Orresho/a-leafy-project) **Important step!**
- When server is successfully started, run `yarn start`
to start the application on `http://localhost:3000`. 

## Cypress e2e Testing
- Start the server
- When sever is started you can run `yarn start` to start the application
- Now open a new terminal/cmd window and inside the project directory run `yarn cypress open`
- You will now be prompted with the cypress GUI containing all the integration tests. Click `Run all specs` button to the top right to run all the tests. 

## Unit Tests
- Run `yarn test` in the terminal/cmd
- If you get promted with some options to run, press `a`to run all tests

## Application information
- Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- Uses Sass as css pre-processor
- Redux to manage state
- Redux-thunk to handle async network requests
- Redux-logger to log dispatched actions
- Prop-types for type checking
- Cypress for end-to-end testing
- Jest/enzyme for unit testing
