class SessionsController < ApplicationController

    def create
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            # if valid email and password authenticates
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: {login: "Invalid information"}}, status: :unauthorized
        end
    end

    def destroy
    end

end
