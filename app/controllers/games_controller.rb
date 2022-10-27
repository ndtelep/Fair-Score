class GamesController < ApplicationController
  before_action :set_game, only: %i[ show update destroy ]
  wrap_parameters format: []


  # GET /games
  def index
    @games = Game.all

    render json: @games
  end

  # GET /games/1
  def show
    render json: @game
  end

  # POST /games
  def create
    @game = Game.create!(game_params)
    render json: @game, status: :created, location: @game
  end

  # PATCH/PUT /games/1
  def update
    @game.update!(game_params)
    render json: @game, status: :accepted
  end

  # DELETE /games/1
  def destroy
    @game.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_game
      @game = Game.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def game_params
      params.permit(:opposing_team, :venue, :win, :home, :completed, :team_id)
    end
end
