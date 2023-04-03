# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version
3.1.2

* System dependencies
- cors , bcrypt

* Configuration
- cookie store 
- sessions 
- authorization

* Database creation
- rails db:create
- rails db:migrate

* Database initialization
- rails db:create


* React start app
cd client 
npm start 


* Project Set up 
1. create app rails new nameofapp --api
2. add gem for bcrypt and rack-cors / bundle install
3. Change ActionController:API  (lightweight version for api project functionalities) to ActionController: Base for all functionalities 
4. In application.rb in config apply the `middleware` that will allow the rails app to receive cookies 
5. Create two files in config/initializers i.e. cookie_serializer.rb and session_store.rb : these two will configure how our servers handle HTTP requests 
6. Create a cors.rb file in the same directory to add cors configurations. (We can also configure the puma.rb file to always run on different port from common ports in other frameworks i.e. to 3001 from 3000 because of React default)
7. Using rails generate generate models and run your migrations after a rails db:create
8. Modify the user model to use has_secure_password for encryption. 
9. Create sample routes in routes.rb : for this demo working with create and show 
10. In the create action use a helper method i.e. login : The natural home for helper methods is the parent ApplicationController 
11. Define the methods there (check notes in that file)
12. Create sessions controller to handle the sesions checks : 


=========================================================

1. Now the react processes : create a react app in a client directory in this same app for a good follow up 
2. Install the following dependencies : react-router and react-router-dom
3. Modify the app.js to include all route matches (check notes in the class)
4. Create the authentication components (Home.js i.e links to login , sign up using react router dom ) then create the login component with methods to handle input changes and handle the submissions action
5. Esure the payloads for the requests params are as follows 

1. Post users (signups)

http://localhost:3001/users

{
  "user": {
    "username": "janedoe",
    "password": "password",
    "password_confirmation": "password"
  }
}

2. Login users

http://localhost:3001/login

{
	"user": {
		"username": "janedoe",
		"password": "password"
	}
}


once logged in in react we are redirecting to the NewFile Component.
Component also has logout prompt. 