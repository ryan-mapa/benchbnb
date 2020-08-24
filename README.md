## Introduction
## Project objectives


`rails _5.2.3_ new benchbnb --database=postgresql -G --skip-turbolinks`

This can take a super long time. While it's running go ahead and read ahead in the instructions for this project.

---

Let's take a moment to bring git into the mix. We should commit often through this project so we have many saved versions of our work just in case we mess up a little along the way. You can always go back to a previous commit!

`git init`
Create `.gitignore` file. For starters you can add this content to it... (add link)
`git add .`
`git commit -m "Make initial commit for benchbnb"` (A good commit message is descriptive and starts with a capitalized, present tense action verb. Best to get into the practice of making good commit messages. This could save you down the line!)

---

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
  `jquery-rails` - this will allow us to fluidly use `$.ajax` in our front end code. Additionally, it will automatically pass our authenticity token into our request/response headers so that we won't have to worry about that anymore.
  `bcrypt` - this must be available for both production and development. Your production server is going to need to use bcrypt too so it must be available globally in your gemfile. It's a commonly used gem in rails so you might notice that it's already there. You just need to comment it in! Don't forget to 
  `bundle install`!

  For jquery-rails to work properly for us we'll need to modify the `app/assests/javascripts/application.js` file. The bottom part of the file should look like the following:
  ```javascript
    //= require rails-ujs
    //= require jquery
    //= require activestorage
    //= require_tree .
  ```
  This will make `$.ajax` available for us to use in our front end!

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
This will also make `app/views/static_pages/root.html.erb` for us!

The contents of that file can just be the following:
```html 
  <div id="root">React must be broken!</div>
``` 
We've left ourselves a nice little error message. If we see that text then we'll know that react failed to render and replace the contents of our "root" div. Our entire rails app will be injected into that div with an id of "root". In our front end code, we'll find it by that id.



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
Run `npm install webpack webpack-cli react react-dom react-redux redux redux-logger redux-thunk @babel/core @babel/preset-react @babel/preset-env babel-loader` with all the following packages:
+ webpack
+ webpack-cli
+ react
+ react-dom
+ react-redux
+ redux
+ redux-logger
+ redux-thunk
+ @babel/core
+ @babel/preset-react
+ @babel/preset-env
+ babel-loader

While we are at it, let's add a `start` script to our `package.json`. inside the scripts object add the follow key-value pair:
```"start": "webpack --watch --mode=development"```
Don't forget to add the comma to separate key-value pairs!

Create a `webpack.config.js` file with the following content:

```javascript
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/benchbnb.jsx', // this is the path to your entry file
  output: { // the path below places your bundle.js into your Rails app assets so that Rails can load up all of our front end JS
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
        use: { // this ensures that we use babel to transpile our ES6+ JS code
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

`frontend/components/app.jsx` - This component will be our entire front end app content.
`frontend/components/root.jsx` - This component gives us a convenient space give our entire app useful tools like Provider for react-redux or HashRouter. For now it should just render our App component.

Set up your entry file to render your Root component.
`frontend/benchbnb.jsx` - The entry point file attaches all of our React content to an html element
In this case we created that element as a div in `app/views/static_pages/root.html.erb`

Let's try firing up our app to see if React renders! 
If it doesn't work as expected just yet, no worries! Let's get our detective hats on, roll up our sleaves, and flex our debugging muscles! Slowly, think through how all the code is connected.

If you haven't done so in a bit, now is a good time to commit!

---


start by adding api utils for testing

Create rootReducer with following code for now:
```javascript
  const rootReducer = combineReducers({
    session: () => ({})
  })
  export default rootReducer;
```
Create `store/store.js`. It should contain export a `configureStore` function that uses `creatStore` from `redux`.
`createStore` takes in your `rootReducer`, a `preloadedState` which can be set to `{}` for now, and `applyMiddleware` which is also from `redux`

Add store into Root as props in benchbnb.jsx
Add Provider with store in Root.jsx

Create sessionApiUtil.js
  + login
  + logout
  + signup

Add store and util functions to window for testing in benchbnb.jsx. Be sure to remove this for production.

Your benchbnb,jsx should look something like this right now:
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'

//for development only
import * as SessionApitUtil from './util/sessionApiUtil';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  
  // for development only
  window.store = store;
  window.sessionAPI = SessionApitUtil;

  ReactDOM.render(<Root store={store} />, root);
})
```

You should be able to signup, login, and logout users from the browser console now. Try it out!

Run the following lines individually and check your server to ensure that things are working properly.
```javascript
sessionAPI.signup({email: "test@test.com", password: "123456"});
sessionAPI.logout();
sessionAPI.login({email: "test@test.com", password: "123456"});
sessionAPI.logout();
```





### Bootstrapping the currentUser

Bootstrapping is a term used to describe any type of action or code we would run at the time of "boot up" (intial loading). For our application that means whenever we reload the page. In this case bootstrapping the user means having our Rails app send along to the front end who the `current_user` (if there is one). Simple as that! Without doing this our front end would not be able to "remember" if we are logged in or not because we would lose all of state whenever we refresh the page.

Here are the steps to bootStrap the current user:
1. Add the `current_user` to the window in a script from the Rails views. 
  - This can be done in either `root.html.erb` or `application.html.erb`. I prefer `root.html.erb`. Inside an html.erb file we can use any valid html. This includes script tags!
  - To simplify this process we are also going to take advantage of jbuilder to format our user information to send up to the front end. Here we want to include all information we need to immediately know about the `currentUser` on the front end. 


Update your `root.html.erb` file to look like this:
```html
<script>
  <% if current_user %>
    window.currentUser = <%= (render "/api/users/current_user.json.jbuilder", user: current_user).html_safe %>
  <% end  %>
</script>
<div id="root">If you see this, then React must be broken!</div>
```

Create a current user partial at `app/views/api/users/_current_user.json.jbuilder`. For now it can simply contain the following:
```ruby
json.extract! userm :id, :email
```

Test to see if everything is working by logging in a user, refreshing the page, and checking what `window.currentUser` is.

Make `usersReducer`
Make `entitiesReducer`
Hook them up to the `rootReducer`


Now that we have the currentUser bootstrapped to the window we want to get this user into our store using preloadedState!

Extract currentUser info from the window in your entry file. It should look like the following:
```javascript
  let preloadedState;
  if (window.currentUser === undefined) {
    preloadedState = {};
  } else {
    preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser}
      },
      session: { currentUserId: window.currentUser.id }
    };
    window.currentUser = null; // remove the currentUser info from the window
  }
  
  const store = configureStore(preloadedState);
```

Check to see that your bootstrapped current user is showing up in your redux store. Note how we only store the currentUserId in our session slice of state to maintain a normalized state shape. Our users slice of state in entities should be responsible for containing all user data.

It's time to build our session actions so that we can prepare to control auth from our react components instead of just firing off $.ajax calls in the console. Make sure to connect these actions to `usersReducer.js` and `sessionReducer.js`









### Let's build out the rest of our auth functionality!


/actions
  + sessionActions.js
/components
  + header.jsx
  /session
    + loginForm.jsx
    + loginFormContainer.js
    + signupForm.jsx
    + signupFormContainer.js
/reducers
  + /entities/
    + usersReducer.js
    + entitiesReducer.js
  + /errors
    + sessionsErrorsReducer.js
  + /ui
  + sessionReducer.js
  + rootReducer.js
/store/store.js
/util/sessionApiUtil.js


---

### Our App layout and component hierarchy 

At this point we should take a moment to consider what kind of user interface (UI) we want for our app. Do we want a separate page for each login and sign up? Do we want those forms to be contained within _modals_?

***For this project we are going to keep things simple and have separate forms. This could be preferable if your sign up for requires more user input than at login. While it might DRYer to use a single form component for both, we're going to make one for each in this project.***

- start with separate components and then refactor to use a modal?

### Create a Header
header component
 + logo
 + GreetingContainer
  + Greeting
  + login/signup or logout buttons