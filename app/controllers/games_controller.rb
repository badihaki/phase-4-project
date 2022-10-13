class GamesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    
    def index
        render json: Game.all, status: :ok
    end

    def show
        game = find_game()
        render json: game, status: :ok
    end

    def create
        game = Game.create!(permitted_params)
        render json: game, status: :created
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors }, status: :unprocessable_entity
        # render json: { errors: [e] }, status: :unprocessable_entity
    end

    def destroy
        game = find_game()
        game.destroy!
        head :no_content
    end

    private

    def find_game
        Game.find(params[:id])
    end

    def permitted_params
        params.permit(:name, :genre)
    end

    def not_found_response
        render json: { error: "Game not found" }, status: :not_found
    end

end
