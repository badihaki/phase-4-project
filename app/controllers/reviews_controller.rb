class ReviewsController < ApplicationController

    def index
        render json: Review.all, status: :ok
    end

    def show
    end

    def create
    end

    def update
    end

    def destroy
    end

end
