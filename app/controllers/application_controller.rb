class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
helper_method :login!, :logged_in?, :current_user,     :authorized_user?, :logout!, :set_user
    
def login!
      session[:user_id] = @user.id
end
def logged_in?
      !!session[:user_id]
end
def current_user
      @current_user ||= User.find(session[:user_id]) if session[:user_id]
end
def authorized_user?
       @user == current_user
end
def logout!
       session.clear
end
def set_user
    @user = User.find_by(id: session[:user_id])
end
end

# Pointers 
# At the top we haveskip_before_action :verify_authenticity_token . 
# This is a security token generated by Rails to prevent cross-site request forgery (CSRF). 
# We disable this to prevent “forbidden” parameters that would cause errors in our controller actions. Using skip_before_action
# We also have helper_method :login!, :logged_in?, :current_user, :authorized_user?, :logout!. 
# This allows for these methods to be passed to all other controllers in the app.
# Our sessions will be created and managed in the SessionsController
# Create the session routes in this steps i.e. login , logout , and check for logged in

