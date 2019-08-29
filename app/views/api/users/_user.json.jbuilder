json.extract! user, :id, :email, :gender
json.firstName user.first_name
json.lastName user.last_name
json.friendIds user.friend_ids
json.birthDate user.birth_date

if user.workplace == nil 
    json.workplace ""
else
    json.workplace user.workplace
end

if user.education == nil 
    json.education ""
else
    json.education user.education
end

if user.hometown == nil 
    json.hometown ""
else
    json.hometown user.hometown
end

if user.location == nil 
    json.location ""
else
    json.location user.location
end

if user.bio == nil 
    json.bio ""
else
    json.bio user.bio
end

if user.current_city == nil 
    json.currentCity ""
else
    json.currentCity user.current_city
end

if user.profile_photo.attached? 
    json.photoUrl url_for(user.profile_photo)
end

json.createdAt({date: user.created_at.strftime('%-B %-d, %Y'),
        time: user.created_at.strftime('%-I:%M%p')})