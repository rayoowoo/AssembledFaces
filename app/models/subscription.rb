class Subscription < ApplicationRecord
    belongs_to :chat
    belongs_to :user
end

# from https://medium.com/@adnama.lin/live-messaging-with-rails-5-action-cable-7f009e0c1d8b