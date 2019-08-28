json.friendship do
    json.partial! 'api/friendships/friendship', friendship: @friendship
end