class Tag < ApplicationRecord 
    validates :post_id, :user_id, presence: true;
    validate :ensure_unique_tag

    def ensure_unique_tag
        if Tag.where("user_id = #{user_id} AND post_id = #{post_id}").exists?
            errors[:base] << "You cannot tag the same post twice."
        end
    end

    belongs_to :tagged_user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :tagged_post,
        foreign_key: :post_id,
        class_name: :Post
end