class Api::UsersController < ApplicationController
    def create 
        debugger
        @user = User.new(user_params)
        if @user.save
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def user_params
        params.require(:user).permit(:email, :password, :birth_date, :first_name, :last_name, :gender)
    end
end