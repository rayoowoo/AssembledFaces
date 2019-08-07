class Api::FriendshipsController < ApplicationController 
    def create
        @friendship = Friendship.new(friendship_params)
        # render json: ["Pending Request"]
        render :show
    end

    def update
        @friendship = Friendship.find(params[:id])
        if @friendship.update_attributes(friendship_params)
            # render json: ["Friends "]
            render :show
        else
            render json: @friendship.errors.full_messages, status: 422
        end
    end

    def destroy
        @friendship = Friendship.find(params[:id])
        if @friendship
            # render json: ["Friend Request"]
            @friendship.destroy
            render :show
        else
            render json: ["friendship does not exist"], status: 404
        end
    end

    private

    def friendship_params
        params.require(:friendship).permit(:requester_id, :requested_id, :status)
    end
end