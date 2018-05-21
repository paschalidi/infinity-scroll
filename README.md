# Optiopay Front End Code Challenge

## Task

Your task is to implement a web-page where our users can infinitely scroll over the list of vouchers and eventually buy one.

As an input you have a basic representation of a voucher list from our design agency:

![design](/Users/christos.paschalidis/Downloads/frontend-challenge/design.png)

This design is already implemented as a simple react app (have a look at the `src/App.js` file).

In `src/index.js` you will find the `fetchVouchers` method which can return as many vouchers as you wish.  

Things to be done:

- Make the list of vouchers dynamic and use data from the `fetchVouchers` method
- Implement infinity scroll (aka feed, like in Facebook) for the vouchers list. 
- (Optional) Our design agency has only implemented the desktop design, can you optimise it for mobile?
- (Optional) `yarn test` would run all the tests, using `jest`. So far, there is only one simple test in `src/App.js`. You can cover the code you wrote with some tests, as well.

To start - run `yarn install` and `yarn start` to start a dev server on `http://localhost:3000`

In terms of styling and layout, please choose whatever you prefer. 
Feel free to use a CSS framework or pre-processor. Whatever you are most comfortable with.

## General info
You can find a live version of the challenge [here](https://optiopay-coding-challenge.herokuapp.com/)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Implementation details

I=

