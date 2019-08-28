json.extract! user, :id, :email, :gender, :workplace, :education, :hometown, :location, :bio
json.firstName user.first_name
json.lastName user.last_name
json.friendIds user.friend_ids
json.birthDate user.birth_date
json.currentCity user.current_city




if user.profile_photo.attached? 
    json.photoUrl url_for(user.profile_photo)
end

json.createdAt({date: user.created_at.strftime('%-B %-d, %Y'),
        time: user.created_at.strftime('%-I:%M%p')})