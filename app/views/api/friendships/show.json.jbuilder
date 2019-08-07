json.friendship do
    json.partial! 'api/friendships/friendship', friendship: @friendship
end

json.requested do 
    json.set! @friendship.requested_id do
        json.partial! 'api/users/user', user: @friendship.requested
    end
end

json.requester do
    json.set! @friendship.requester_id do
        json.partial! 'api/users/user', user: @friendship.requester
    end
end