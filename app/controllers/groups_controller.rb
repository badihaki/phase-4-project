class GroupsController < ApplicationController
    
    def index
        render json: Group.all, status: :ok
    end

    def show
        group = find_group()
        render json: group, status: :ok
    end

    def create
        group = Group.create!(permitted_params)
        render json: group, status: :created
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors }, status: :unprocessable_entity
    end

    private

    def find_group
        Group.find(params[:id])
    end

    def permitted_params
        params.permit(:name, :message)
    end

end