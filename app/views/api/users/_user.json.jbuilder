json.extract! user, :id, :email, :first_name, :last_name, :birth_date, :gender, :workplace, :education, :hometown, :current_city, :location, :bio
# json.photoUrl url_for(user.photo)

if user.profile_photo.attached? 
    json.photoUrl url_for(user.profile_photo)
end

if user.cover_photo.attached?
    json.coverUrl url_for(user.cover_photo)
end

if user.photos.attached?
    json.photoUrls user.photos.map { |file| url_for(file) }
end

json.created_at({date: user.created_at.strftime('%-B %-d, %Y'),
        time: user.created_at.strftime('%-I:%M%p')})

json.friend_ids do
    json.array! user.requested_friend_ids
    json.array! user.received_friend_ids
end