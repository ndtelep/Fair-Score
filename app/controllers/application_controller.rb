class ApplicationController < ActionController::API
    include ActionController::Cookies
    
    before_action :authorized_user
    skip_before_action :authorized_user, only: [:current_user]

    def authorized_user  
        render json: { error: "Not authorized" }, status: :unauthorized unless current_user
    end

    def current_user
        user = User.find_by(id: session[:user_id])
        user
    end 
    
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    # rescue_from ActiveRecord::RecordNotFounds, with: :render_not_found
    def render_unprocessable_entity(invalid)
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end
    # def render_not_found (error)
    #     render json: {errors: {error.model: "Not Found"}}, status: :not_found
    # end
end

