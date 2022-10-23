class ReviewsController < ApplicationController

    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response

    def index
        user = find_user()
        render json: user.reviews.all, status: :ok
    end

    def show
        review = find_review()
        render json: review, status: :ok
    end

    def create
        user = find_user()
        new_review = user.reviews.create!(permitted_params)
        render json: new_review, status: :created
    rescue ActiveRecord::RecordInvalid => e
        render json: {errors: e.record.errors}, status: :unprocessable_entity
    end

    def update
        review = find_review()
        review.update!(permitted_params)
        render json: review, status: :accepted
    end

    def destroy
        review = find_review()
        review.destroy!
        head :no_content
    end

    private

    def permitted_params
        params.permit(:game_id, :score, :comment)
    end

    def find_review
        Review.find(params[:id])
    end

    def find_user
        User.find(params[:user_id])
    end

    def authorize
        render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

    def not_found_response
        render json: {error: "Record not found"}, status: :not_found
    end

end
