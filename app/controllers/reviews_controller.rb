class ReviewsController < ApplicationController

    before_action :authorize

    def index
        user = find_user()
        render json: user.reviews.all, status: :ok
    end

    def show
        # return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id # <<-- use this if below doesn't work
        return render json: {error: "Not Authorized"}, status: :unauthorized unless sessions.include? :user_id
        
    end

    def create
    end

    def update
    end

    def destroy
    end

    private

    def find_user
        User.find(id:sessions[:user_id])
    end

    def authorize
        render json: {error: "Not authorized"}, status: :unauthorized, unless session.include? :user_id
    end

end
