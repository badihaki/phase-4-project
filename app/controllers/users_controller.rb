class UsersController < ApplicationController

    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: {error: "Not logged in"}, status: :unauthorized
        end
        rescue ActiveRecord::RecordNotFound
            render json: {error: "User Not Found"}
    end

    def create
        user = User.create!(create_params)
        render json: user, status: :created
    rescue ActiveRecord::RecordInvalid => error
        render json: {errors: error.record.errors}
    end

    private

    def find_user
        User.find(params[:id])
    end

    def create_params
        params.permit(:email, :password, :password_confirmation, :nickname, :bio)
    end

    def update_params
        params.permit(:bio)
    end

end
