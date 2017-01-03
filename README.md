# JSON API React Redux Example
Show case for [json-api-normalizer](https://github.com/yury-dymov/json-api-normalizer) and [redux-object](https://github.com/yury-dymov/redux-object).

DEMO - [https://yury-dymov.github.io/json-api-react-redux-example/](https://yury-dymov.github.io/json-api-react-redux-example/)

# Description
This is a demo application for [HabraHabr article](http://ToDo). A lot more details can be found there.

It represents, how data formatted with [JSON API](http://jsonapi.org/) can be further converted to a more redux-friendly format with [json-api-normalizer](https://github.com/yury-dymov/json-api-normalizer) library.

The application uses [https://phoenix-json-api-example.herokuapp.com/api/test](https://phoenix-json-api-example.herokuapp.com/api/test) as a JSON API data source, developed with Phoenix Framework. Feel free to check the [API source code](https://github.com/yury-dymov/phoenix-json-api-example) if desired.

You can also try the demo - [https://yury-dymov.github.io/json-api-react-redux-example/](https://yury-dymov.github.io/json-api-react-redux-example/).

# Installation
OS X, Linux, and Windows platforms are supported. [Node.js](https://nodejs.org/en/) should be installed, of course.

* Clone the repo with `git clone https://github.com/yury-dymov/json-api-react-redux-example.git`
* Install dependencies with `npm install`
* Build the JS with `npm run build`
* Run webpack-dev-server with `npm run webpack-dev-server`

Now you can visit [`http://localhost:8050`](http://localhost:8050) from your browser.

*Note: Internet access is required to make things work as a backend is initially deployed on Heroku. You may deploy it locally as described [here](https://github.com/yury-dymov/phoenix-json-api-example#installation) and change API_ROOT variable in `src/redux/middleware/api.js` to make things work with no Internet access if desired.*

# License
MIT (c) Yury Dymov.
