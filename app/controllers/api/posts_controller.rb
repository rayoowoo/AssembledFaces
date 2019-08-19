class Api::PostsController < ApplicationController 
    before_action :ensure_logged_in
    
    def index
        # this would be for the timeline, where only the timeline posts are needed. 
        @posts = User.find(params[:user_id]).timeline_posts.includes(:likes, comments: [author: [profile_photo_attachment: [:blob]]], author: [profile_photo_attachment: [:blob]], photo_attachment: [:blob])
        render :index 
    end

    def feed
        # this is just basically all the friends' timeline posts plus the current user's timeline posts (minus the ones made by nonfriends).

        ids = Friendship.select('requester_id, requested_id').where("requested_id = #{params[:id]} OR requester_id = #{params[:id]} AND status = 'accepted'").map {|el|
                        el.requester_id + el.requested_id - params[:id].to_i }


        @posts = Post.where("user_id = #{params[:id]} OR author_id = #{params[:id]} OR (user_id IN (?) AND author_id IN (?))", ids, ids)
                .includes(
                        :likes, 
                        comments: [author: [:sent_friend_requests, :received_friend_requests, profile_photo_attachment: [:blob]]], 
                        author: [:sent_friend_requests, :received_friend_requests, profile_photo_attachment: [:blob]], 
                        photo_attachment: [:blob]
                        )


        render :index
    end

    def show
        @post = Post.includes(:likes, comments: [author: [profile_photo_attachment: [:blob]]], author: [profile_photo_attachment: [:blob]], photo_attachment: [:blob]).find(params[:id])
        render :show
    end

    def create
        @post = Post.includes(author: [profile_photo_attachment: [:blob]], photo_attachment: [:blob]).new(post_params)

        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = current_user.authored_posts.includes(:likes, comments: [author: [profile_photo_attachment: [:blob]]], author: [profile_photo_attachment: [:blob]], photo_attachment: [:blob]).find(params[:id])
        if @post.update_attributes(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @post = current_user.authored_posts.includes(:likes, comments: [author: [profile_photo_attachment: [:blob]]], author: [profile_photo_attachment: [:blob]], photo_attachment: [:blob]).find(params[:id])
        # not sure what to do here yet...
        if @post.try(:destroy)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    # private
    
    def post_params
        common_params = [:body, :author_id, :user_id]
        common_params << :photo if params[:post][:photo] != "null"
        params.require(:post).permit(*common_params)
    end
end