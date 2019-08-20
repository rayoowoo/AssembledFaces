# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  birth_date      :date             not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  gender          :string           not null
#  location        :string
#  workplace       :string
#  education       :string
#  current_city    :string
#  hometown        :string
#  bio             :text
#

class User < ApplicationRecord
    validates :password_digest, :session_token, :email, :first_name, :last_name, :birth_date, :gender, presence: true
    validates :session_token, :email, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token
    attr_reader :password

    #authored posts are posts that this user has authored (whether on the user's own or another user's timeline)
    has_many :authored_posts,
        foreign_key: :author_id,
        class_name: :Post,
        inverse_of: :author

    #timeline posts are all the posts that this user or other users have posted on this user's timeline
    has_many :timeline_posts,
        foreign_key: :user_id,
        class_name: :Post,
        inverse_of: :user

    has_many :authored_comments,
        foreign_key: :author_id,
        class_name: :Comment

    has_one_attached :profile_photo
    has_one_attached :cover_photo
    has_many_attached :photos

    # friend requests that the user has sent to other users
    has_many :sent_friend_requests,
        foreign_key: :requester_id,
        class_name: :Friendship

    # friend requests that the user has received from other users
    has_many :received_friend_requests,
        foreign_key: :requested_id,
        class_name: :Friendship

    # friends that this user has requested
    has_many :requested_friends,
        through: :sent_friend_requests,
        source: :requested

    # friends that this user has received requests from
    has_many :received_friends,
        through: :received_friend_requests,
        source: :requester

    # likes posts
    has_many :likes
    has_many :liked_posts, through: :likes, source: :likeable, source_type: "Post"
    # has_many :liked_comments, through: :likes, source: :likeable, source_type: "Comment"
    has_many :post_tags, foreign_key: :user_id, class_name: :Tag
    has_many :tagged_posts, through: :post_tags, source: :tagged_post

    def friend_ids
        @friend_ids ||= Friendship.select('requester_id, requested_id').where("requested_id = ? OR requester_id = ? AND status = 'accepted'", self.id, self.id).map {|el|
            el.requester_id + el.requested_id - self.id }
    end

    def friends 
        @friends ||= User.where('id IN (?)', self.friend_ids).includes(profile_photo_attachment: [:blob])
    end

    def friend_requests
        @friend_requests ||= Friendship.where("requested_id = ? OR requester_id = ?", self.id, self.id)
    end

    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        return user if user && user.is_password?(password)
        nil
    end

    def is_password?(password)
        bcrypt_password = BCrypt::Password.new(self.password_digest)
        bcrypt_password.is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    
end
