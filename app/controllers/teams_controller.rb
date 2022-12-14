class TeamsController < ApplicationController
  before_action :set_team, only: %i[ show update destroy ]
  wrap_parameters format: []

  # GET /teams
  def index
    @teams = Team.all

    render json: @teams
  end

  # GET /teams/1
  def show
    render json: @team
  end

  # POST /teams
  def create
    @team = Team.create!(team_params)
    render json: @team, status: :created
  end

  # PATCH/PUT /teams/1
  def update
    if @team.update!(team_params)
    render json: @team, status: :accepted
  end

  # DELETE /teams/1
  def destroy
    @team.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_team
      @team = Team.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def team_params
      params.permit(:location, :nickname, :home_venue, :image_url)
    end
end
