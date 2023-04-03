require_dependency "sessions_controller"

class SessionsController < ApplicationController
    def create
        @user = User.find_by(username: session_params[:username])
      
        if @user && @user.authenticate(session_params[:password])
          login!
          render json: {
            logged_in: true,
            user: @user
          }
        else
          render json: { 
            status: 401,
            errors: ['no such user, please try again']
          }
        end
    end
    def is_logged_in?
        if logged_in? && current_user
          render json: {
            logged_in: true,
            user: current_user
          }
        else
          render json: {
            logged_in: false,
            message: 'no such user'
          }
        end
    end
    def destroy
          logout!
          render json: {
            status: 200,
            logged_out: true
          }
    end
    private
    def session_params
          params.require(:user).permit(:username, :password)
    end
    end

    # We are authenticating the user data with .authenticate, a method that the user model 
    # gets from bcrypt and the has_secure_password line in the user class.