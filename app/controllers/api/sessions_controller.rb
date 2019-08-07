class Api::SessionsController < ApplicationController
    def create 
        @user = User.with_attached_profile_photo.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render :show
        else
            attempted_user = User.find_by(email: params[:user][:email])
            if attempted_user
                render json: ["wrong password", {attempted_email: params[:user][:email]}], status: 401
            else
                render json: ["email address was not found"], status: 404
            end
        end
    end

    def destroy
        if !current_user
            render json: ['no user to logout'], status: 404
        end
        logout!
    end

end