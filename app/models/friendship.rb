# == Schema Information
#
# Table name: friendships
#
#  id           :bigint           not null, primary key
#  requester_id :integer          not null
#  requested_id :integer          not null
#  status       :string           default("pending"), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Friendship < ApplicationRecord 
    validates :status, presence: true
    validate :ensure_unique_ids

    private

    def ensure_unique_ids
        if requested_id == requester_id
            errors[:base] << "You cannot friend request your"
        elsif Friendship.where("(requested_id = #{requested_id} AND requester_id = #{requester_id}) OR (requested_id = #{requester_id} AND requester_id = #{requested_id})").exists? && status == "pending"
            errors[:base] << "You cannot request the same person twice."
        end
    end

    belongs_to :requester,
        foreign_key: :requester_id,
        class_name: :User

    belongs_to :requested,
        foreign_key: :requested_id,
        class_name: :User

end
