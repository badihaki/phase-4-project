class ReviewsController < ApplicationController

    before_action :authorize
    skip_before_action :authorize, only: [:index, :show]
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response

    def index
        if params[:user_id]
            user = find_user()
            # debugger
            render json: user.reviews.all, status: :ok
        else
            # debugger
            render json: Review.all, status: :ok
        end
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

    # custom method: find reviews by term
    # use params[:search_term] with comment.include?

    def search
        # get search term, save as variable 'to_lowercase
        search = params[:search_term].downcase
        reviews = []
        Review.all.each do |review|
            # find comment bsaed on params[search_term]
            if review.comment.downcase.include? search
                # reviews <<< comment.review
                reviews.push(review)
            end
    end
    if reviews.count != 0
        return render json: reviews, status: :ok
    else
        return render json: {error: "No reviews found"}
    end
    end

    private

    def permitted_params
        params.permit(:game_id, :score, :comment, :user_id)
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
