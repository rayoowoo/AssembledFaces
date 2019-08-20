json.extract! user, :id, :first_name, :last_name, :friend_ids

if user.profile_photo.attached? 
    json.photoUrl url_for(user.profile_photo)
end