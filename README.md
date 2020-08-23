## Introduction
## Project objectives


`rails _5.2.3_ new benchbnb --database=postgresql -G --skip-turbolinks`

This can take a super long time. While it's running go ahead and read ahead in the instructions for this project.

Create database (Make sure Postgres is running)
`rails db:create`

Create users table
`rails g migration createUsers`

Make the columns:
`email`
`password_digest`
`session_token`

be sure to add not null database constraints

create User model
- add validations 

create `Api::UsersController`
create `Api::SessionsController`
ex: `rails g controller Api::users`

Add gems you need:
  `bcrypt` - this must be available for both production and development. Your production server is going to need to use bcrypt too so it must be available globally in your gemfile. It's a commonly used gem in rails so you might notice that it's already there. You just need to comment it in! Don't forget to `bundle install`!

Build out the Auth pattern just as you learned.
  You will no longer need view helpers since we won't be using Rails views (We're using the much more awesome React for our front end).

User Model:  `self.find_by_credentials`, `password=`, `is_password?`, `reset_session_token!`, `ensure_session_token`
ApplicationController: `#login`, `#logout`, `#current_user`
UsersController: `#create`
SessionsController: `#create`, `#destroy`

Let's get our routes up and running for the controller actions that we have created!



The view that is home to our entire app!

`rails g controller StaticPages root`
This will create the StaticPagesController with a `#root` action ready for us
This will also make root.html.erb for us



At this point let's take a break from setting up user auth and make sure we have a front end to connect with our rails back end. (We recommend developing from the back end first and then connecting the two.)

What do we need to do in order to set our front end up? We need so include react 

Frontend Structure
Create a /frontend folder at the root directory of your project to hold your JavaScript files:

/frontend
  + /actions
  + /components
    + app.jsx 
    + root.jsx 
  + /reducers
  + /store
  + /util
  benchbnb.jsx

Set up your frontend dependencies:
Run `npm init -y`.
Run `npm install webpack webpack-cli react react-dom react-redux redux redux-logger @babel/core @babel/preset-react @babel/preset-env babel-loader` with all the following packages:
+ webpack
+ webpack-cli
+ react
+ react-dom
+ react-redux
+ redux
+ redux-logger
+ @babel/core
+ @babel/preset-react
+ @babel/preset-env
+ babel-loader

Create a webpack.config.js file.

```javascript
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/benchbnb.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 8000, // Convert images < 8kb to base64 strings
                name: '[path][name].[ext]'
            }
        }]
      }
    ]
  },
  devtool: 'inline-source-map'
};
```


Set up your entry file (bench_bnb.jsx) to render your app into the #root container.
