# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  body       :text
#  author_id  :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord 
    # the author_id belongs to the user who made the post
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User,
        inverse_of: :authored_posts

    # the user_id belongs to the user whose timeline this post lives on
    # the user_id and the author_id could be the same if the user posted on his own timeline
    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User,
        inverse_of: :timeline_posts

    has_many :comments, dependent: :destroy

    has_one_attached :photo

    # users who like the post are called likers
    has_many :likes, as: :likeable, dependent: :destroy
    has_many :likers, through: :likes, source: :user
    has_many :tags,
        foreign_key: :post_id,
        class_name: :Tag

    has_many :tagged_users, through: :tags, source: :tagged_user
end
