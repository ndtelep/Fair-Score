class UsersController < ApplicationController
  # before_action :set_user, only: %i[ show update destroy ]
  # wrap_parameters format: []

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: current_user, status: :ok
  end

  # POST /users
  def create
    @user = User.create!(user_params)
    render json: @user, status: :created, location: @user
  end

  # PATCH/PUT /users/1
  def update
    @user.update!(user_params)
    render json: @user, status: :unprocessable_entity
  end

  # DELETE /users/1
  def destroy
    @user.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:name, :password, :password_confirmation)
    end
end
