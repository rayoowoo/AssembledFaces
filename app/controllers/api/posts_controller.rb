class Api::PostsController < ApplicationController 
    before_action :ensure_logged_in
    
    def index
        if params.include?(:user_id)
            @posts = User.find(params[:user_id]).timeline_posts.includes(:comments, :author) # this would be for the timeline, where only the timeline posts are needed. 
        else
            @posts = Post.all.includes(:comments, :author) # right now this will be all the posts, but once friends are implemented, this will be just posts of or by friends. 
            # this would be for the news feed, where post not limited to the user's timeline posts are needed.
        end
        render :index 
    end

    def show
        @post = Post.includes(:comments, :author).find(params[:id])
        render :show
    end

    def create
        @post = Post.new(post_params)

        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = current_user.authored_posts.find(params[:id])
        if @post.update_attributes(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @post = current_user.authored_posts.find(params[:id])
        # not sure what to do here yet...
        if @post.try(:destroy)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    private
    
    def post_params
        common_params = [:body, :author_id, :user_id]
        common_params << :photo if params[:post][:photo] != "null"
        params.require(:post).permit(*common_params)
    end
end