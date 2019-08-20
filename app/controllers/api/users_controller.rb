class Api::UsersController < ApplicationController
    def create 
        @user = User.with_attached_profile_photo.with_attached_cover_photo.with_attached_photos.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.with_attached_profile_photo.with_attached_cover_photo.with_attached_photos
                    .includes(:sent_friend_requests, :received_friend_requests, :received_friends, :requested_friends).find(params[:id])
        render :show
    end

    def index
        @users = User.with_attached_profile_photo.all
        render :index
    end

    def update
        @user = User.with_attached_profile_photo.with_attached_cover_photo.with_attached_photos.find(params[:id])
        if @user.update_attributes(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def search
        @users = User.with_attached_profile_photo.where("LOWER(users.first_name) LIKE LOWER('%#{params[:string]}%') OR LOWER(users.last_name) LIKE LOWER('%#{params[:string]}%')")
        render :index

    end

    def user_params
        params.require(:user).permit(:email, :password, :birth_date, :first_name, :last_name, :gender, :hometown, :current_city, :workplace, :education, :location, :profile_photo, :cover_photo, photos: [])
    end
end