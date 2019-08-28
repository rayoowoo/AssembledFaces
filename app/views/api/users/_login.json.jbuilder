json.extract! user, :id
json.firstName user.first_name
json.lastName user.last_name
json.friendIds user.friend_ids

if user.profile_photo.attached? 
    json.photoUrl url_for(user.profile_photo)
end