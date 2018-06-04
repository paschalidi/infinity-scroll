# Infinity Scroll HOC

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



## Task

Your task is to implement a web-page where our users can infinitely scroll over the list of vouchers and eventually buy one.

As an input you have a basic representation of a voucher list from our design agency.

Things to be done:

- Make the list of vouchers dynamic and use data from the `fetchVouchers` method
- Implement infinity scroll (aka feed, like in Facebook) for the vouchers list.
- (Optional) Our design agency has only implemented the desktop design, can you optimise it for mobile?
- (Optional) `yarn test` would run all the tests, using `jest`. So far, there is only one simple test in `src/App.js`. You can cover the code you wrote with some tests, as well.

In terms of styling and layout, please choose whatever you prefer.
Feel free to use a CSS framework or pre-processor. Whatever you are most comfortable with.


## Implementation

### Details

* I believe that the structure of the project itself was not very scalable so I changes it a bit.
* State management is being handled by redux
* The mobile version is being optimised
* I used ui grid from [semantic-ui](https://semantic-ui.com/)
* Test are being written with Jest.
* I didnt test the reducer as it is very very simple in this case. You can see more of the tests I wrote in my github though.
* Infinite scroll is being handled by a HOC which is attached to the pageView. This way we could use the infinite scroll in any page view we might have in the future.
