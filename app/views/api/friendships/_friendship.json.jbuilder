json.set! friendship.id do 
    json.extract! friendship, :id, :status
    json.requesterId friendship.requester_id
    json.requestedId friendship.requested_id
end