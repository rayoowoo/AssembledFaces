class Like < ApplicationRecord 

    validates :user_id, :likeable_id, :likeable_type, presence: true;
    validate :ensure_unique_like

    private

    def ensure_unique_like
        if Like.where("user_id = #{user_id} AND likeable_id = #{likeable_id} AND likeable_type = '#{likeable_type}'").exists?
            errors[:base] << "You cannot like the same item twice."
        end
    end

    belongs_to :user
    belongs_to :likeable, polymorphic: true


end