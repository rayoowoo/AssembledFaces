json.user do
    json.set! @user.id do
        json.partial! 'api/users/user', user: @user
    end
end

json.friendships do 
    @user.friend_requests.each do |request|
        json.partial! 'api/friendships/friendship', friendship: request
    end
end

json.friends do 
    @user.friends.each do |friend|
        json.set! friend.id do
            json.partial! 'api/users/user', user: friend
        end
    end
end