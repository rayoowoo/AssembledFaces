class Api::CommentsController < ApplicationController 
    before_action :ensure_logged_in

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = current_user.authored_comments.find(params[:id])
        if @comment.update_attributes(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = current_user.authored_comments.find(params[:id])
        # not sure what to do here yet...
        if @comment.try(:destroy)
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end


    private

    def comment_params
        params.require(:comment).permit(:body, :author_id, :post_id, :parent_comment_id)
    end

end