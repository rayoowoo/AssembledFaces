json.friendship do
    json.set! @friendship.id do 
        json.extract! @friendship, :id, :requester_id, :requested_id, :status
    end
end

json.requested
    json.set! @friendship.requested_id do
        json.partial! 'api/users/user', user: @friendship.requested
    end
end

json.requester
    json.set! @friendship.requester_id do
        json.partial! 'api/users/user', user: @friendship.requester
    end
end