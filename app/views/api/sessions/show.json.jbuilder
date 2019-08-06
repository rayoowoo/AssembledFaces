json.user do 
    json.partial! 'api/users/user', user: @user
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