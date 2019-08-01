# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  body              :text
#  author_id         :integer          not null
#  post_id           :integer          not null
#  parent_comment_id :integer
#

class Comment < ApplicationRecord 
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :post

    belongs_to :parent_comment,
        foreign_key: :parent_comment_id,
        class_name: :Comment,
        optional: true

    has_many :child_comments,
        foreign_key: :parent_comment_id,
        class_name: :Comment,
        dependent: :destroy

    has_one_attached :photo
end
