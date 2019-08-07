json.user do
    json.set! @user.id do
        json.partial! 'api/users/user', user: @user
    end
end

json.posts do
    @user.timeline_posts.each do |post|
        json.set! post.id do
            json.partial! 'api/posts/post', post: post
        end
    end
end

json.comments do 
    @user.timeline_posts.each do |post|
        post.comments.each do |comment|
            json.set! comment.id do 
                json.partial! 'api/comments/comment', comment: comment
            end
        end
    end
end

json.friendships do 
    @user.sent_friend_requests.each do |request|
        json.partial! 'api/friendships/friendship', friendship: request
    end

    @user.received_friend_requests.each do |request|
        json.partial! 'api/friendships/friendship', friendship: request
    end
end

json.friends do 
    @user.requested_friends.each do |friend|
        json.set! friend.id do
            json.partial! 'api/users/user', user: friend
        end
    end
    @user.received_friends.each do |friend|
        json.set! friend.id do
            json.partial! 'api/users/user', user: friend
        end
    end
end