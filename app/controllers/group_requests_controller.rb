class GroupRequestsController < ApplicationController

    def index
        render json: GroupRequest.all, status: :ok
    end

    def show
        request = find_request()
        render json: request, status: :ok
    rescue ActiveRecord::RecordNotFound
        render json: {error: "Request record not found"}
    end

    def create
        new_request = GroupRequest.create!(permitted_params)
        render json: new_request, status: :created
    rescue ActiveRecord::RecordInvalid => e
        render json: {errors: e.record.errors}, status: :unprocessable_entity
    end

    private

    def find_request
        GroupRequest.find(params[:id])
    end

    def permitted_params
        params.permit(:game_id, :user_id, :request_message)
    end

end
