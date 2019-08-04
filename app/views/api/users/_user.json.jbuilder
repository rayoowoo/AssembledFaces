json.extract! user, :id, :email, :first_name, :last_name, :birth_date, :gender, :workplace, :education, :hometown, :current_city, :location, :bio
# json.photoUrl url_for(user.photo)

json.created_at({date: user.created_at.strftime('%-B %-d, %Y'),
        time: user.created_at.strftime('%-I:%M%p')})