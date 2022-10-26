class ApplicationController < ActionController::API
    include ActionController::Cookies

    def json_index
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: { count: session[:count] }
        teams = Team.all
        render json: teams.to_json
    end    
end
