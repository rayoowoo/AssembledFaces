json.extract! user, :id, :email, :first_name, :last_name, :birth_date, :gender, :workplace, :education, :hometown, :current_city, :location, :bio, :friend_requests, :friends, :friend_ids

if user.profile_photo.attached? 
    json.photoUrl url_for(user.profile_photo)
end

json.created_at({date: user.created_at.strftime('%-B %-d, %Y'),
        time: user.created_at.strftime('%-I:%M%p')})