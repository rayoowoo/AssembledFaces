json.extract! user, :id, :email, :gender
json.firstName user.first_name
json.lastName user.last_name
json.friendIds user.friend_ids
json.birthDate user.birth_date

if user.workplace == nil 
    json.workplace ""
end

if user.education == nil 
    json.education ""
end

if user.hometown == nil 
    json.hometown ""
end

if user.location == nil 
    json.location ""
end

if user.bio == nil 
    json.bio ""
end

if user.current_city == nil 
    json.currentCity ""
end



if user.profile_photo.attached? 
    json.photoUrl url_for(user.profile_photo)
end

json.createdAt({date: user.created_at.strftime('%-B %-d, %Y'),
        time: user.created_at.strftime('%-I:%M%p')})