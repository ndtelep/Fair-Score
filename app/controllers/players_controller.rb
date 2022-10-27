class PlayersController < ApplicationController
  before_action :set_player, only: %i[ show update destroy ]
  wrap_parameters format: []


  # GET /players
  def index
    @players = Player.all

    render json: @players
  end

  # GET /players/1
  def show
    render json: @player
  end

  # POST /players
  def create
    @player = Player.create!(player_params)
    render json: @player, status: :created, location: @player
  end

  # PATCH/PUT /players/1
  def update
    @player.update!(player_params)
    render json: @player, status: :unprocessable_entity
  end

  # DELETE /players/1
  def destroy
    @player.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_player
      @player = Player.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def player_params
      params.permit(:first_name, :last_name, :number, :points, :assists, :rebounds, :steals, :blocks, :team_id)
    end
end
