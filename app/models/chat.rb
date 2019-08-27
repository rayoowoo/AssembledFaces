class Message < ApplicationRecord
    has_many :messages, dependent: :destroy
    has_many :subscriptions, dependent: :destroy

    has_many :users, through: :subscriptions

    validates :identifier, presence: true, uniqueness: true, case_sensitive: false
end

# from https://medium.com/@adnama.lin/live-messaging-with-rails-5-action-cable-7f009e0c1d8b