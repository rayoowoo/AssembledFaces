json.set! friendship.id do 
    json.extract! friendship, :id, :requester_id, :requested_id, :status
end