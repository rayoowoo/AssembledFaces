class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render :show
        else
            render json: ["invalid email or password"], status: 401
        end
    end

    def destroy
        if !current_user
            render json: ['no user to logout'], status: 404
        end
        logout!
    end

end