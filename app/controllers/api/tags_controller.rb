class Api::TagsController < ApplicationController
    def create
        @tag = Tag.new(tag_params)
        if @tag.save
            render :show
        else
            render @tag.errors.full_messages, status: 422
        end
    end

    def destroy
        @tag = Tag.find(params[:id])
        @tag.destroy
        render :show
    end

    def tag_params
        params.require(:tag).permit(:user_id, :post_id)
    end

end