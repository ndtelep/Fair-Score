class SessionsController < ApplicationController
    skip_before_action :authorized_user

    def create
        user = User.find_by(name:params[:name])
        # user && user.authenticate....)
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            byebug
            render json: user, status: :ok
        else
            render json: {errors: "Invalid Password or Username"}
        end 
    end 

    def destroy
        session.delete(:user_id)
        head :no_content 
    end 
end